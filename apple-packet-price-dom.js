//var apples = document.querySelector(".number_of_apples").value;
var calculateButton = document.querySelector(".calculateBtn");
var packets = document.querySelector(".packets");
var apple_price = document.querySelector(".price_per_apple");
var packetPrice = document.querySelector(".packet_price");
var recommendedPrice = document.querySelector(".recommended_price");

const applePacketInstance = applePriceFactory();

calculateButton.addEventListener("click", function () {
  alert("hi");
  applePacketInstance.setBoxPrice(
    Number(document.querySelector(".box_Price").value)
  );
  applePacketInstance.setNumberOfApples(
    Number(document.querySelector(".number_of_apples").value)
  );
  applePacketInstance.setPriceOfApple(
    Number(document.querySelector(".packet_size").value)
  );
  applePacketInstance.setProfit(
    Number(document.querySelector(".profit").value)
  );
  packets.innerHTML = applePacketInstance.numberOfPackets();
  apple_price.innerHTML = applePacketInstance.appleCost();
  packetPrice.innerHTML = applePacketInstance.costPerPacket();
});

greetButton.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  greetElement.value = "";
});
