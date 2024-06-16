require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const { addressRouter, tokenRouter, transactionRouter } = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/api', addressRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log('Server is running on port', PORT);
  try {
    await sequelize.authenticate();
    console.log('DB connected successfully.');
  } catch (e) {
    console.log('Unable to connect to the database:', e.message);
  }
});
