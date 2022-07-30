const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FeatThing extends Model {}

FeatThing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        feaat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'feat',
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
        modelName: 'featthing',
    }
);

module.exports = FeatThing;