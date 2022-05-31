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
  function costPerPacket() {
    let price = appleCost() * 5;
    return price;
  }
  function numberOfPackets() {
    let apple_Packets = getNumberOfApples() / costPerPacket();
    return apple_Packets;
  }
  function howMuchProfit() {
    let profit = getSoldApples() * getProfit();
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
    setPriceOfApple,
    getPriceOfApple,
    costPerPacket,
    numberOfPackets,
    howMuchProfit,
  };
}
