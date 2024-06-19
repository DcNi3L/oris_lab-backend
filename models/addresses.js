module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        address: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        balance: {
            type: DataTypes.BIGINT,
        },
        create_time: {
            type: DataTypes.DATE,
        },
        latest_consume_time: {
            type: DataTypes.DATE,
        },
        latest_operation_time: {
            type: DataTypes.DATE,
        },
        account_resource: {
            type: DataTypes.JSONB,
        },
        frozen: {
            type: DataTypes.JSONB,
        },
        assetV2: {
            type: DataTypes.JSONB,
        },
        net_window_size: {
            type: DataTypes.BIGINT,
        },
        net_window_optimized: {
            type: DataTypes.BOOLEAN,
        },
        owner_permission: {
            type: DataTypes.JSONB,
        },
        active_permission: {
            type: DataTypes.JSONB,
        },
    }, {
        tableName: 'addresses',
        timestamps: true,
    });

    Address.associate = (models) => {
        Address.hasMany(models.Transactions, { foreignKey: 'from_id', as: 'sentTransactions' });
        Address.hasMany(models.Transactions, { foreignKey: 'to_id', as: 'receivedTransactions' });
    };

    return Address;
};
