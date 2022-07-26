// references earlier choices, referenced by Options or Choices

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Choice extends Model {}

Choice.init(
    {
        //id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //info
        info: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //pick how many?
        pick: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        //(optional) earlier choice
        earlier_choice: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'choice',
                key: 'id',
            },
        },
        race_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'race',
                key: 'id',
            },
        },
        /* class_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'class',
                key: 'id',
            },
        }, */
        feat_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'feat',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'choice',
    },
);

module.exports = Choice;