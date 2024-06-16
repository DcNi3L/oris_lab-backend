const { sequelize } = require('../models');
const { DataTypes } = require('sequelize');

const runMigrations = async () => {
    try {
        // Миграция для таблицы Addresses
        await sequelize.getQueryInterface().createTable('Addresses', {
            address: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            balance: {
                type: DataTypes.FLOAT,
            },
            trx_balance: {
                type: DataTypes.FLOAT,
            },
            tokens: {
                type: DataTypes.JSONB,
            },
            is_contract: {
                type: DataTypes.BOOLEAN,
            },
            creation_date: {
                type: DataTypes.DATE,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        });

        // Миграция для таблицы Tokens
        await sequelize.getQueryInterface().createTable('Tokens', {
            token_id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            token_name: {
                type: DataTypes.STRING,
            },
            symbol: {
                type: DataTypes.STRING,
            },
            total_supply: {
                type: DataTypes.FLOAT,
            },
            decimals: {
                type: DataTypes.INTEGER,
            },
            issuer_address: {
                type: DataTypes.STRING,
            },
            creation_date: {
                type: DataTypes.DATE,
            },
            description: {
                type: DataTypes.STRING,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        });

        // Миграция для таблицы Transactions
        await sequelize.getQueryInterface().createTable('Transactions', {
            transaction_id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },
            block_number: {
                type: DataTypes.INTEGER,
            },
            timestamp: {
                type: DataTypes.DATE,
            },
            from_address: {
                type: DataTypes.STRING,
                references: {
                    model: 'Addresses', // имя таблицы, на которую ссылается внешний ключ
                    key: 'address',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            to_address: {
                type: DataTypes.STRING,
                references: {
                    model: 'Addresses',
                    key: 'address',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            amount: {
                type: DataTypes.FLOAT,
            },
            token_id: {
                type: DataTypes.STRING,
                references: {
                    model: 'Tokens',
                    key: 'token_id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            transaction_fee: {
                type: DataTypes.FLOAT,
            },
            contract_address: {
                type: DataTypes.STRING,
            },
            status: {
                type: DataTypes.STRING,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        });

        console.log('Migrations were successful');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await sequelize.close();
    }
};

runMigrations();
