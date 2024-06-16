module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Addresses', {
        address: { type: DataTypes.STRING, primaryKey: true },
        balance: { type: DataTypes.FLOAT },
        trx_balance: { type: DataTypes.FLOAT },
        tokens: { type: DataTypes.JSONB },
        is_contract: { type: DataTypes.BOOLEAN },
        creation_date: { type: DataTypes.DATE },
    });
};
