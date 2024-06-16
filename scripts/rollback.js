const { sequelize } = require('../models');

const rollbackMigrations = async () => {
    try {
        await sequelize.getQueryInterface().dropTable('Transactions');
        await sequelize.getQueryInterface().dropTable('Addresses');
        await sequelize.getQueryInterface().dropTable('Tokens');

        console.log('Rollback was successful');
    } catch (error) {
        console.error('Rollback failed:', error);
    } finally {
        await sequelize.close();
    }
};

rollbackMigrations();
