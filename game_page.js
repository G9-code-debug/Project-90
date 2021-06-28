player1 = "";
player2 = "";
player1score = 0;
player2score = 0;
player1 = localStorage.getItem("user_x");
player2 = localStorage.getItem("user_y");
document.getElementById("a").innerHTML = player1 + " = ";
document.getElementById("b").innerHTML = player1score;
document.getElementById("c").innerHTML = player2 + " = ";
document.getElementById("d").innerHTML = player2score;
document.getElementById("f").innerHTML = player1;
document.getElementById("h").innerHTML = player2;
function send() {

}