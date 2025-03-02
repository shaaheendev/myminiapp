// script.js
Telegram.WebApp.ready();

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  Telegram.WebApp.sendData("hello");
});

let mainButton = Telegram.WebApp.MainButton.setParams({
  text: "Send data to Bot",
}).onClick(function () {
  // You can do something on button click,
  // for example, close the Web App:
  Telegram.WebApp.close();
});
