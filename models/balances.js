module.exports = (sequelize, DataTypes) => {
    const Balance = sequelize.define('Balance', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        owner: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },

    })
}
