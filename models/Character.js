const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        str: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dex: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        con: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        int: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        wis: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cha: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
);

module.exports = Character;