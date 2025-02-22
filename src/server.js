import express from 'express';
import request from 'request';
import cors from 'cors';

const app = express();
const PORT = 3003;

const allowedOrigins = ['https://gcli.li', 'https://www.gcli.li'];

// Middleware zur Behandlung von CORS
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Unterstützung von Preflight-Anfragen
app.options('/api/jackpot', (req, res) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

// API-Endpunkt zur Bereitstellung der Jackpot-Daten
app.get('/api/jackpot', (req, res) => {
  request(
    { url: 'https://gcli.li/json/jackpot.json' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error ? error.message : `Status Code: ${response.statusCode}` });
      }

      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }

      res.json(JSON.parse(body));
    }
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
