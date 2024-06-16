module.exports = (sequelize, DataTypes) => {
    const Addresses = sequelize.define('Addresses', {
        address: { type: DataTypes.STRING, primaryKey: true },
        balance: { type: DataTypes.FLOAT },
        trx_balance: { type: DataTypes.FLOAT },
        tokens: { type: DataTypes.JSONB },
        is_contract: { type: DataTypes.BOOLEAN },
        creation_date: { type: DataTypes.DATE },
    });

    Addresses.associate = function(models) {
        Addresses.hasMany(models.Transactions, { foreignKey: 'from_address', sourceKey: 'address', as: 'SentTransactions' });
        Addresses.hasMany(models.Transactions, { foreignKey: 'to_address', sourceKey: 'address', as: 'ReceivedTransactions' });
    };

    return Addresses;
};
