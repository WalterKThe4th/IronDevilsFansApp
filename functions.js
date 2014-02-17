function hello() {
	var name = document.getElementById("name").value;
	hello2(name);
}

function verify() {
	var confirmation = prompt("Are you an Iron Devil?");
	openSuperSecret(confirmation);
}

function openSuperSecret(message) {
	switch(message) {
		case "Yes":
		case "yes":
		case "walter is awesome":
			parent.location = "secret.html";
			break;
		default:
			alert("You should become an Iron Devil!!!");
	}

}
function hello2(name) {
	alert("hello, " + name);
}