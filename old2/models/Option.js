// Reference a Choice and a Thing

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Option extends Model {}

Option.init(
    {
        //id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //Choice id
        choice_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'choice',
                key: 'id',
            },
        },
        //Thing id
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
        modelName: 'option',
    }
);

module.exports = Option;