const sequelize = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const Transactions = require('./transactions')(sequelize, DataTypes);
const Addresses = require('./addresses')(sequelize, DataTypes);
const Tokens = require('./tokens')(sequelize, DataTypes);

const models = {
    Addresses,
    Transactions,
    Tokens
};

// Установите связи между моделями
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = { models, sequelize };
