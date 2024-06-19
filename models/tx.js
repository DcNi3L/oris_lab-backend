module.exports = (sequelize, DataTypes) => {
  const Tx = sequelize.define('Tx', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    block_num: {
      type: DataTypes.INTEGER,
    },
    value: {
      type: DataTypes.DECIMAL(78),
      allowNull: false,
    },
    value_txt: {
      type: DataTypes.STRING(68),
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING(68),
      allowNull: false,
      unique: true,
    },
    tx_fee: {
      type: DataTypes.DECIMAL(78),
      defaultValue: 0,
    },
    tx_fee_txt: {
      type: DataTypes.STRING(68),
      defaultValue: '0x0',
    },
    from_id: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    to_id: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.STRING(256),
    },
  }, {
    tableName: 'tx',
    timestamps: true,
  });

  Tx.associate = (models) => {
    Tx.belongsTo(models.Addresses, { foreignKey: 'from_id', as: 'fromAddress' });
    Tx.belongsTo(models.Addresses, { foreignKey: 'to_id', as: 'toAddress' });
    Tx.belongsTo(models.Tokens, { foreignKey: 'token_id' });
  };

  return Tx;
};
