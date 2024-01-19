const express = require('express');
const { execSync } = require('child_process');
const corsMiddleware = require('./corsMiddleware');

const app = express();
const port = process.env.PORT || 5000;

app.use(corsMiddleware);

app.get('/wifi-passwords', (req, res) => {
  try {
    const profiles = execSync('netsh wlan show profiles', { encoding: 'utf-8' });
    const profileNames = profiles
      .split('\n')
      .filter(line => line.includes('All User Profile'))
      .map(line => line.split(':')[1].trim());

    const wifiPasswords = [];

    profileNames.forEach(profile => {
      try {
        const results = execSync(`netsh wlan show profile "${profile}" key=clear`, { encoding: 'utf-8' });
        const passwordLine = results.split('\n').find(line => line.includes('Key Content'));
        const password = passwordLine ? passwordLine.split(':')[1].trim() : '';

        wifiPasswords.push({ profile, password });
      } catch (error) {
        console.error(`Error occurred for ${profile}: ${error.message}`);
      }
    });

    const formattedOutput = JSON.stringify(wifiPasswords, null, 2); // 2 boşluklu bir düzenleme kullanıyoruz
    res.setHeader('Content-Type', 'application/json');
    res.send(formattedOutput);
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
