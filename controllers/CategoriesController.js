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

module.exports = router;