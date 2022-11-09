const express = require('express');
const router = express.Router();
const Product = require("../models/Product");
const axios = require('axios');
const browserObject = require('../service/browser');
const scraperController = require('../service/pageController');
const puppeteer = require('puppeteer');

/* GET home page. */
router.get('/', function(req, res, next) {

    // Test Product 
    // Product.create({
    //     name: "a",
    //     price: 10,
    //     image: "abcd",
    //     asin: "aa"
    // })

    res.render('index');
});

router.get('/scrape-data', async function(req, res) {
    let browserInstance = browserObject.startBrowser();
    await scraperController(browserInstance);

    res.render('index');

});

module.exports = router;