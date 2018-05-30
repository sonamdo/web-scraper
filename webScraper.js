var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
var https = require('https');

var getSellingPrice = require('./getSellingPrice');
var sportingLife = require ('./websites/sportingLife.js');
var corbbets = require ('./websites/corbbets.js');
var gears = require ('./websites/gears.js');
var bikezone = require ('./websites/bikezone.js');
var broadway = require ('./websites/broadway.js');

//each function scrapes the corresponding website for products and prices
//at the moment its set up for bike products however we can adjust the urls for other categories
sportingLife();
gears();
corbbets();
bikezone();
broadway();
