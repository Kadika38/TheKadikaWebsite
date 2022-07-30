const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClassFeature extends Model {}

ClassFeature.init(
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
        modelName: 'classfeature',
    }
);

module.exports = ClassFeature;