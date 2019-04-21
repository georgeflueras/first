document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
var keyCode = e.keyCode;
    if(keyCode === 76) 
        document.getElementById("poza_logo").style.opacity='0.5';
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if(ev.target.tagName === "ARTICLE") {
		ev.target.appendChild(document.getElementById(data));
	}
	
}