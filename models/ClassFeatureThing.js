const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClassFeatureThing extends Model {}

ClassFeatureThing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        class_feature_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'classfeature',
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
        modelName: 'classfeaturething',
    }
);

module.exports = ClassFeatureThing;