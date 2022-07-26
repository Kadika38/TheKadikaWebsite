const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RaceThing extends Model {}

RaceThing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        race_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'race',
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
        modelName: 'racething',
    }
);

module.exports = RaceThing;