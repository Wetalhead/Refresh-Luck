var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomImage1 = "dice"+randomNumber1+".png";
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randomImage2 = "dice"+randomNumber2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",randomImage1);
document.getElementsByClassName("img2")[0].setAttribute("src",randomImage2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 wins!!!!!"
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw"
}
else {
  document.querySelector("h1").textContent = "Player 2 wins!!!!! 🚩"
}
