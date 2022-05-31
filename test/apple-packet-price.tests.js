describe("The Apple Packet Price Planner", function () {
  describe("set the values", function () {
    it("should be able to set the box price of apples", function () {
      let applePrice = applePriceFactory();
      applePrice.setBoxPrice(30);
      assert.equal(30, applePrice.getBoxPrice());
    });
    it("should be able to set the number of apples in the box", function () {
      let applePrice = applePriceFactory();
      applePrice.setNumberOfApples(25);
      assert.equal(25, applePrice.getNumberOfApples());
    });
    it("should be able to set the price of apple", function () {
      let applePrice = applePriceFactory();
      applePrice.setPriceOfApple(1.5);
      assert.equal(1.5, applePrice.getPriceOfApple());
    });
    it("should be able to set the number of apples she would like to sell", function () {
      let applePrice = applePriceFactory();
      applePrice.setSellApples(15);
      assert.equal(15, applePrice.getSoldApples());
    });
    it("should be able to set the percentage profit", function () {
      let applePrice = applePriceFactory();
      applePrice.setProfit(30);
      assert.equal(30, applePrice.getProfit());
    });
  });
  describe("calculating the values", function () {
    it("should be able to calculate how much one apple cost", function () {
      let applePrice = applePriceFactory();
      applePrice.setBoxPrice(30);

      applePrice.setNumberOfApples(15);

      //applePrice.appleCost();
      let total = applePrice.appleCost();

      assert.equal(2, total);
    });
    it("should be able to calculate how much packet of apple cost", function () {
      let applePrice = applePriceFactory();
      applePrice.setBoxPrice(30);

      applePrice.setNumberOfApples(15);

      let packet = applePrice.costPerPacket();
      assert.equal(10, packet);
    });
    it("should be able to calculate the number of apple packects made from a box", function () {
      let applePrice = applePriceFactory();
      applePrice.setBoxPrice(30);

      applePrice.setNumberOfApples(30);
      let packetsNumber = applePrice.numberOfPackets();

      assert.equal(6, packetsNumber);
    });
    it("should be able to calculate the price of sold apple packets to make profit", function () {
      let applePrice = applePriceFactory();
      applePrice.setSel.Apples(10);
    });
  });
});
