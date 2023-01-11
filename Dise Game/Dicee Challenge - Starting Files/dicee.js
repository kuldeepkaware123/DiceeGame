const images = ["images/dice1.png","images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.querySelector(".img1").src = images[0];
document.querySelector(".img2").src = images[0];
function dicee(){
let num1 = Math.floor(Math.random() * 6);
let num2 = Math.floor(Math.random() * 6);
document.querySelector(".img1").src = images[num1];
document.querySelector(".img2").src = images[num2];
if (num1 > num2) {
    document.querySelector("#result").innerHTML = "Player 1 is Winner!!";
}
else if (num1 < num2) {
    document.querySelector("#result").innerHTML = "Player 2 is Winner!!";
}
else{
    document.querySelector("#result").innerHTML = "Match Draw!!";
}
}

