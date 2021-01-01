const Sequelize = require('sequelize');

const connection = require('../database/database');

const CategoryModel = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = CategoryModel;