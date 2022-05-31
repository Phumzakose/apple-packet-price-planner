describe("The Apple Packet Price Planner", function () {
  describe("set the values", function () {
    it("should be able to set the box price of apples", function () {
      let applePrice = applePriceFactory();
      applePrice.setBoxPrice(30);
      assert.equal(30, applePrice.setBoxPrice());
    });
    it("should be able to set the number of apples in the box", function () {
      let applePrice = applePriceFactory();
      applePrice.setNumberOfApples(25);
      assert.equal(25, applePrice.setNumberOfApples());
    });
    it("should be able to set the number of apples she would like to sell", function () {
      let applePrice = applePriceFactory();
      applePrice.setSellApples(15);
      assert.equal(15, applePrice.setSellApples());
    });
    it("should be able to set the percentage profit", function () {
      let applePrice = applePriceFactory();
      applePrice.setProfit(30);
      assert.equal(30, applePrice.setProfit());
    });
  });
  describe("get the values", function () {
    it("should be able to get the box price of apples", function () {
      let applePrice = applePriceFactory();
      applePrice.setBoxPrice(30);
      assert.equal(30, applePrice.getBoxPrice());
    });
  });
});
