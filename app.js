// app.js
require('dotenv').config();
const express = require('express');
const app = express();

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

// ...

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
