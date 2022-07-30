const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClassThing extends Model {}

ClassThing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'class',
                key: 'id',
            },
        },
        thing_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'thing',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'classthing',
    }
);

module.exports = ClassThing;