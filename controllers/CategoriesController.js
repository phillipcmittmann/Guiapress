const express = require('express');
const router = express.Router();

const CategoriesModel = require('../models/CategoriesModel');

const slugify = require('slugify');

router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new')
});

router.post('/categories/save', (req, res) => {
    var title = req.body.title;

    if (title !== undefined) {
        CategoriesModel.create({
            title: title,
            slug: slugify(title)
        })
        .then(() => {
            res.redirect('/');
        });
    } else {
        res.redirect('/admin/categories/new');
    }
});

router.get('/admin/categories', (req, res) => {
    CategoriesModel
    .findAll()
    .then(categories => {
        res.render('admin/categories/index', { categories: categories });
    });
});

router.post('/categories/delete', (req, res) => {
    var id = req.body.id;

    if (id !== undefined) {
        if (!isNaN(id)) {
            CategoriesModel
            .destroy({
                where: { id: id }
            })
            .then(() => {
                res.redirect('/admin/categories');
            });
        }  else {
            res.redirect('/admin/categories');
        }
    } else {
        res.redirect('/admin/categories');
    }
});

module.exports = router;