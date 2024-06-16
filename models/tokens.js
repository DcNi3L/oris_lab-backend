module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Tokens', {
        token_id: { type: DataTypes.STRING, primaryKey: true },
        token_name: { type: DataTypes.STRING },
        symbol: { type: DataTypes.STRING },
        total_supply: { type: DataTypes.FLOAT },
        precision: { type: DataTypes.INTEGER },
        trx_num: { type: DataTypes.INTEGER },
        start_time: { type: DataTypes.DATE },
        end_time: { type: DataTypes.DATE },
        owner_address: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
    });
};
