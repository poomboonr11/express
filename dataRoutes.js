const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const MONGODB_URI = 'mongodb+srv://poomboonrawd1:4413@phume.jf3xgby.mongodb.net/';
const dbName = 'sampleDB';

MongoClient.connect(MONGODB_URI, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db(dbName);

  // เพิ่มข้อมูลใหม่
  router.post('/', (req, res) => {
    const data = req.body;

    db.collection('data').insertOne(data, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error inserting data');
        return;
      }

      res.status(201).send('Data inserted');
    });
  });
});

module.exports = router;
