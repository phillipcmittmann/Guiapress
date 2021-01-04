const Sequelize = require('sequelize');

const connection = require('../database/database');

const CategoriesModel = require('./CategoriesModel');

const ArticlesModel = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

ArticlesModel.belongsTo(CategoriesModel);
CategoriesModel.hasMany(ArticlesModel);

// ArticlesModel.sync({ force: true });

module.exports = ArticlesModel;