const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'harry',
  password: 'potter',
  database: 'pop_collection'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected.');
});

app.get('/getDataAcquise', (req, res) => {
  const query = 'SELECT * FROM images WHERE status = "acquise"';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/getDataNonAcquise', (req, res) => {
  const query = 'SELECT * FROM images WHERE status = "non acquise"';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/updateStatus', (req, res) => {
  console.log("Received request", req.body); // Log pour voir les données reçues
  const { id, status } = req.body;
  const query = `UPDATE images SET status = ? WHERE id = ?`;

  db.query(query, [status, id], (err, result) => {
    if (err) {
      console.error("Error occurred:", err); // Log en cas d'erreur
      res.status(500).json({ success: false, message: "Internal Server Error" });
      return;
    }
    res.json({ success: true, message: "Status updated" });
  });
});

app.listen(4242, () => {
  console.log('Server running on port 4242');
});