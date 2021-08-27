var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");



function inputLength() {
    return input.value.length;
}

function createListElement() {
    var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='Delete';
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)
function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)





