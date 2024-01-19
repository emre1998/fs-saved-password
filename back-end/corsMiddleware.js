// corsMiddleware.js

function corsMiddleware(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Tüm domainlerden gelen isteklere izin verdim. Spesifik bir domain için değiştirin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    next();
  }
  
  module.exports = corsMiddleware;

  