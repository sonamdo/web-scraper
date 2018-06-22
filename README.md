# Web Scraper
## An app that scans for products and parses the information into a csv

This app is currently set to scan bike stores to see what bikes they have for sale and at what price, but can be edited for other product categories as well.
The information is then parsed into a csv file using json2csv(https://github.com/zemirco/json2csv) for price comparisons. 
Because each website handles requests differently and stores their information in different html elements I opted to set them up as seperate functions in their own files.



