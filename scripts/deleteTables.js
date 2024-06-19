const { sequelize } = require('../models');

const rollbackMigrations = async () => {
    try {

        const tablesToDrop = ['tx', 'addresses', 'tokens', 'blocks_scanned'];

        for (const table of tablesToDrop) {
            await sequelize.getQueryInterface().dropTable(table);
            console.log(`Table '${table}' dropped successfully`);
        }

        console.log('Rollback was successful');
    } catch (error) {
        console.error('Rollback failed:', error);
    } finally {
        await sequelize.close();
    }
};

rollbackMigrations();
