module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define('Token', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        token_id: {
            type: DataTypes.INTEGER(),
        },
        decimals: {
            type: DataTypes.SMALLINT,
        },
        symbol: {
            type: DataTypes.STRING(16),
        },
        name: {
            type: DataTypes.STRING(64),
        },
        contract: {
            type: DataTypes.STRING(64),
        },
        abi: {
            type: DataTypes.JSON,
        },
        standard: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        total_supply: {
            type: DataTypes.DECIMAL(78, 0),
        },
        owner_address: {
            type: DataTypes.STRING,
        },
        start_time: {
            type: DataTypes.DATE,
        },
        end_time: {
            type: DataTypes.DATE,
        },
    }, {
        tableName: 'tokens',
        timestamps: true,
    });

    return Token;
};
