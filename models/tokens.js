module.exports = (sequelize, DataTypes) => {
    const Tokens = sequelize.define('Tokens', {
        token_id: { type: DataTypes.STRING, primaryKey: true },
        token_name: { type: DataTypes.STRING },
        symbol: { type: DataTypes.STRING },
        total_supply: { type: DataTypes.FLOAT },
        precisions: { type: DataTypes.INTEGER },
        issuer_address: { type: DataTypes.STRING },
        creation_date: { type: DataTypes.DATE },
        description: { type: DataTypes.STRING },
    });

    Tokens.associate = function(models) {
        Tokens.hasMany(models.Transactions, { foreignKey: 'token_id', sourceKey: 'token_id' });
    };

    return Tokens;
};
