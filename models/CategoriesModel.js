const Sequelize = require('sequelize');

const connection = require('../database/database');

const CategoriesModel = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// CategoriesModel.sync({ force: true });

module.exports = CategoriesModel;