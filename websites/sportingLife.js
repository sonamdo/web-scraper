var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
var getSellingPrice = require('../getSellingPrice');

const fields = ['name', 'model', 'brand', 'price'];

var productList = [];

class Product {
  constructor(name, model, brand, price){
    this.name = name;
    this.model = model;
    this.brand = brand;
    this.price = price
  }
}

const csvParser = () => {
  const json2csvParser = new Json2csvParser({ fields });
  productList = getSellingPrice(productList);//this should convert the list to only show sales price, not regular price
  const csv = json2csvParser.parse(productList);

  console.log(csv);
  fs.appendFile('PriceList.csv', csv, function(err){
    if (err) throw err;
    console.log('Saved!')
  });
  productList = []
}

const sportingLife = () => {

  var name = 'Sportinglife'

  for (let i = 0; i < 5; i++){
    request("https://www.sportinglife.ca/c/adult-alpine-ski-type?howMany=12&sorting=&page=" + i, function(error, response, body)
    {

      if(error) {
        console.log("Error: " + error);
      }
        console.log("Status code: " + response.statusCode);

      var $ = cheerio.load(body);
       $('.product-card').each(function( index ) {
         var brand = $(this).find('.product-name > h2').text().trim();
         var model = $(this).find('a > h2').text().trim();
         var price = $(this).find('.price > div').text().trim();

         productList.push(new Product (name, model, brand, price));
       });
       csvParser()
    });
  }

  for (i = 0; i < 5; i++){
    request("https://www.sportinglife.ca/c/bike-types-road-bikes?howMany=12&sorting=&page=" + i, function(error, response, body)
    {

      if(error) {
        console.log("Error: " + error);
      }
        console.log("Status code: " + response.statusCode);

      var $ = cheerio.load(body);
       $('.product-card').each(function( index ) {
         var brand = $(this).find('.product-name > h2').text().trim();
         var model = $(this).find('a > h2').text().trim();
         var price = $(this).find('.price > div').text().trim();

         productList.push(new Product (name, model, brand, price));
       });
       csvParser()
    });
  }
}

module.exports = sportingLife;
