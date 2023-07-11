const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

module.exports = async function (req, res) {
  try {
    const client = new MongoClient(uri, options);
    await client.connect();
    const db = client.db('account');
    const { Email, password: pass } = req.body;
    const userRole = 'Unknown';

    const checkUsername = await db.collection('posts').findOne({ Email });
    if (!checkUsername) {
      const message = 'User not found';
      res.json({ error: message });
      return;
    }

    const match = await bcrypt.compare(pass, checkUsername.password);
    if (match) {
      const message = { status: 'ok', user: checkUsername };
      res.json(message);
    } else {
      const message = { status: 'error' };
      res.json(message);
    }

    await client.close();
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
