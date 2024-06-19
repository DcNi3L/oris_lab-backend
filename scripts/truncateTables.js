const { sequelize } = require('../models');

const truncateTables = async () => {
    try {
        const tablesToTruncate = ['tx', 'addresses', 'tokens', 'blocks_scanned'];

        for (const table of tablesToTruncate) {
            await sequelize.query(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`);
            console.log(`Table '${table}' truncated successfully`);
        }

        console.log('Truncation was successful');
    } catch (error) {
        console.error('Truncation failed:', error);
    } finally {
        await sequelize.close();
    }
};

truncateTables();
