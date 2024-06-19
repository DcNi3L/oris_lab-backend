require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const { Transactions, Addresses, Tokens } = require('./models');
const { addressRouter, tokenRouter, txRouter } = require('./routes');

const app = express();
app.use(express.json());

//routes
app.use('/api/addresses', addressRouter);
app.use('/api/transactions', txRouter);
app.use('/api/tokens', tokenRouter);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected successfully.');

    await sequelize.sync();
    if (Transactions.associate) {
      Transactions.associate({ Addresses, Tokens });
    } else if (Addresses.associate) {
      Addresses.associate({ Transactions });
    }
    console.log('Tables synced successfully.');

    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  } catch (e) {
    console.log('Unable to connect to the database:', e.message);
  }
})();
