// // script.js
// Telegram.WebApp.ready();

// Telegram.WebApp.onEvent("mainButtonClicked", function () {
//   Telegram.WebApp.sendData("hello");
// });

// let mainButton = Telegram.WebApp.MainButton.setParams({
//   text: "Send data to Bot",
// }).onClick(function () {
//   // You can do something on button click,
//   // for example, close the Web App:
//   Telegram.WebApp.close();
// });

// Initialize the Mini App
Telegram.WebApp.ready();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("showPopup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  Telegram.WebApp.showPopup({ title: "salam", message: "bye" });
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
