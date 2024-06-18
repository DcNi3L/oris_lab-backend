const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
const Transactions = require('./tx')(sequelize, DataTypes);
const Addresses = require('./addresses')(sequelize, DataTypes);
const Tokens = require('./tokens')(sequelize, DataTypes);
const Blocks = require('./blocks_scanned')(sequelize, DataTypes);


module.exports = {
    sequelize,
    Addresses,
    Transactions,
    Tokens,
    Blocks
};
