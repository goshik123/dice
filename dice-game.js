function randomNumber(){

return Math.floor((Math.random()*6)+1);
}
var plr1 = randomNumber();
var plr2 = randomNumber();

document.getElementById("img1").src = "images/"+ "dice" + plr1 + ".png";
document.getElementById("img2").src = "images/"+ "dice" + plr2 + ".png";

if(plr1>plr2){
  document.getElementById("player1").innerHTML="Winner";
} else{
  if(plr1<plr2){
    document.getElementById("player2").innerHTML="Winner";
  }else{
    document.getElementById("player1").style.visibility = "hidden";
    document.getElementById("player2").style.visibility = "hidden";
    document.getElementById("status").style.visibility = "visible";
  }
}
