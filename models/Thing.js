// Info, stats, proficiencies, traits, feats, stat bonuses

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Thing extends Model {}

Thing.init(
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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['info', 'other stat', 'proficiency', 'trait', 'feat', 'stat bonus']],
            },
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        other_stat: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: [['size', 'speed', 'climb', 'fly']],
            },
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        climb: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        fly: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        proficiency: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        feat_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'feat',
                key: 'id',
            },
        },
        stat_bonus_type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: [['str', 'dex', 'con', 'wis', 'int', 'cha']],
            },
        },
        stat_bonus: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        save_bonus_type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: [['str', 'dex', 'con', 'wis', 'int', 'cha']],
            },
        },
        save_bonus: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        skill_bonus_type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: [['acrobatics', 'animal handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'slight of hand', 'stealth', 'survival']],
            },
        },
        skill_bonus: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'thing',
    }
);

module.exports = Thing;