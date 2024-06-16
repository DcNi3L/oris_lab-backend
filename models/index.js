const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
const Transactions = require('./transactions')(sequelize, DataTypes);
const Addresses = require('./addresses')(sequelize, DataTypes);
const Tokens = require('./tokens')(sequelize, DataTypes);

module.exports = { Transactions, Addresses, Tokens, sequelize };
