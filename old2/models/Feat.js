const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Feat extends Model {}

Feat.init(
    {
        //id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'feat',
    }
);

module.exports = Feat;