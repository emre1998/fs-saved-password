import React, { useState, useEffect } from 'react';
import styles from './App.css'; 

function App() {
  const [wifiData, setWifiData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:5000/wifi-passwords')
      .then(response => response.json())
      .then(data => setWifiData(data))
      .catch(error => console.error('Hata:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="button">
      <button className={styles.button} onClick={fetchData}>Veriyi Getir</button>
      <ul>
        {wifiData.map((wifi, index) => (
          <li key={index}>
            <strong>SSID:</strong> {wifi.profile}, <strong>Şifre:</strong> {wifi.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
