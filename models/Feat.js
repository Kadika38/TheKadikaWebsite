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
            type: DataTypes.STRING,
            allowNull: false,
        },
        choice_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
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