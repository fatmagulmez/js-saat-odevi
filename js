let userName = prompt("Adinizi Giriniz")

let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} <strong style="color: red">${userName}!</strong>`

function showTime() {
	var date = new Date().toLocaleString();
	document.getElementById("myClock").innerHTML = date;
}

showTime();

setInterval("showTime()", 1000);

