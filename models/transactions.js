module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Transactions', {
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
};
