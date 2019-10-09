var left=document.getElementById("left"); // we could have also used query.selector("") instead of getElementById
var right=document.getElementById("right");
var colorvalue=document.getElementById("colorValue");
var body=document.querySelector("body");
var button=document.getElementById("random");
colorvalue.innerHTML=left.value+","+right.value;

function addcolor(){
	body.style.background="linear-gradient(to right,"+ left.value + "," + right.value + ")";
	colorvalue.innerHTML=left.value+","+right.value;
}

// Event Listener are added down below.

left.addEventListener('input',addcolor);
right.addEventListener('input',addcolor);

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split(''),
        color = '#';
    for(var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// This function sets body background-color to random value.
function setRandomColor(){
	var x=getRandomColor();
	var y=getRandomColor();
	body.style.background="linear-gradient(to right,"+ x + "," + y + ")";
	colorvalue.innerHTML=x+","+y;
	left.value=x; right.value=y;	
}

button.addEventListener('click',setRandomColor);
// background: linear-gradient(direction, color-stop1, color-stop2, ...);
