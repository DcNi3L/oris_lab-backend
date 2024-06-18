module.exports = (sequelize, DataTypes) => {
    const BlocksScanned = sequelize.define('BlocksScanned', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        num: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        hash: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        tableName: 'blocks_scanned',
        timestamps: false,
    });

    return BlocksScanned;
};
