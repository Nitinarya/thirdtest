var infantBtn = document.querySelector("#infant");
var childBtn = document.querySelector("#child");
var boyBtn = document.querySelector("#boy");
var teenBtn = document.querySelector("#teen");
var adultBtn = document.querySelector("#adult");
var geniusBtn = document.querySelector("#genius");
var playBtn = document.querySelector("#play");




// childBtn.addEventListener("click",function(){
// 	childBtn.classList.add("selected");
// 	infantBtn.classList.remove("selected");
// 	infantBtn.classList.remove("selected");
// 	infantBtn.classList.remove("selected");
// 	infantBtn.classList.remove("selected");
// 	infantBtn.classList.remove("selected");
// 	infantBtn.classList.remove("selected");

// });
// infantBtn.addEventListener("click",function(){
// 	infantBtn.classList.add("selected");
// 	childBtn.classList.remove("selected");

// });










function randomNum(){
	//pick a "red" from 0-255
	 var a = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	 var b = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	 var c = Math.floor(Math.random()*256);

	 return "abc(" + a + "+" + b + "+" + c +")"
}

var numDisplay = document.querySelector("#numDisplay");
numDisplay.textContent= randomNum();

