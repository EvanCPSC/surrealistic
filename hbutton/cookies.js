
let counterDisplayElem = document.querySelector('.counter-display');
let counterPlusElem = document.querySelector('.h');

let count = 0;

counterPlusElem.addEventListener("click",()=>{
count++;
updateDisplay();
document.cookie = "value=" + count;
});

function updateDisplay(){
counterDisplayElem.innerHTML = count;
};

function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
} 
if (getCookie("value") === undefined || getCookie("value") === null) {

}
else {
document.querySelector(".counter-display").innerHTML = getCookie("value");
}



function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
} 
console.log(getCookie("value"));