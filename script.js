const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control error";
	const small = formControl.querySelector("small");
	small.innerText = message;
}

//show sucess outline
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control sucess";
}
//check required fields
function checkRequired(inputArr) {
	inputArr.forEach(function(input) {
		if (input.value === "") {
			showError(input, `${getFieldName(input.id)} is invalid`);
		} else {
			showSuccess(input);
		}
	});
}

//return capatilized id
function getFieldName(input) {
	return input.charAt(0).toUpperCase() + input.slice(1);
}
//check valid email
function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

//event listeners
form.addEventListener("submit", function(e) {
	e.preventDefault();
	checkRequired([username, email, password, password2]);
});
