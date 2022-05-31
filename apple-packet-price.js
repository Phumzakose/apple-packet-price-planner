function applePriceFactory() {
  var thePrice = 0;
  var theAppleNumber = 0;
  var soldApples = 0;
  var profitPercent = 0;
  var theApplePrice = 0;
  var apple = 0;

  function setBoxPrice(price) {
    thePrice = price;
  }
  function getBoxPrice() {
    return thePrice;
  }
  function setPriceOfApple(applePrice) {
    theApplePrice = applePrice;
  }
  function getPriceOfApple() {
    return theApplePrice;
  }
  function setNumberOfApples(appleNumber) {
    theAppleNumber = appleNumber;
  }
  function getNumberOfApples() {
    return theAppleNumber;
  }

  function setSellApples(apples) {
    soldApples = apples;
  }
  function getSoldApples() {
    return soldApples;
  }
  function setProfit(profit) {
    profitPercent = profit;
  }
  function getProfit() {
    return profitPercent;
  }
  function appleCost() {
    let cost = getBoxPrice() / getNumberOfApples();
    return cost;
  }
  function totalPrice() {
    return theApplePrice;
  }

  return {
    setBoxPrice,
    getBoxPrice,
    setNumberOfApples,
    getNumberOfApples,
    setSellApples,
    getSoldApples,
    setProfit,
    getProfit,
    appleCost,
    totalPrice,
    setPriceOfApple,
    getPriceOfApple,
  };
}
