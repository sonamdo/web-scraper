//Many websites list both the standard price and the sales price of their products together.
//This function reduces the information to just the sales price and also removes and commas or unnecessary string values and then converts it into a number

const getSellingPrice = (priceList) => {

  for (i = 0; i < priceList.length; i ++){
    string = priceList[i].price

    if (typeof string == 'string'){
      console.log(string)

      answer = string.replace(/,/g,'');
      answer = answer.replace(/\s+/g, '');
      answer = answer.replace(/[a-z]/gi, '');
      answer = answer.split('$').map(Number);

      function removeFalse(array) {
        return array.filter(Boolean);
      }

      answer = removeFalse(answer)

      priceList[i].price = Math.min(...answer)
    }
  }
  return priceList
}

module.exports = getSellingPrice;
