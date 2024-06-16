module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    transaction_id: { type: DataTypes.STRING, primaryKey: true },
    block_number: { type: DataTypes.INTEGER },
    timestamp: { type: DataTypes.DATE },
    from_address: { type: DataTypes.STRING },
    to_address: { type: DataTypes.STRING },
    amount: { type: DataTypes.FLOAT },
    token_id: { type: DataTypes.STRING },
    transaction_fee: { type: DataTypes.FLOAT },
    contract_address: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
  });

  Transactions.associate = function(models) {
    Transactions.belongsTo(models.Addresses, { foreignKey: 'from_address', targetKey: 'address', as: 'FromAddress' });
    Transactions.belongsTo(models.Addresses, { foreignKey: 'to_address', targetKey: 'address', as: 'ToAddress' });
    Transactions.belongsTo(models.Tokens, { foreignKey: 'token_id', targetKey: 'token_id' });
  };

  return Transactions;
};
