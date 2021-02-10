

let username = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");

let validName = false;
let validEmail = false;
let validNumber = false;


username.addEventListener("input", () => {

    let regex = /^[a-z][a-zA-Z0-9]{2,10}$/;

    let str = username.value;

    if (regex.test(str)) {


        username.classList.remove("textbox");
        return validName = true;
    }
    else {

        username.classList.add("textbox");
        return validName = false;
    }

})


email.addEventListener("input", () => {

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;

    if (regex.test(str)) {


        email.classList.remove("textbox");
        return validEmail = true;
    }
    else {

        email.classList.add("textbox");
        return validEmail = false;
    }

})


number.addEventListener("input", () => {

    let regex = /^([0-9]){10}$/;

    let str = number.value;

    if (regex.test(str)) {


        number.classList.remove("textbox");
        return validNumber = true;
    }
    else {

        number.classList.add("textbox");
        return validNumber = false;
    }

})

let submit = document.getElementById("submit");

submit.addEventListener("click", validateForm);

function validateForm(e) {
    e.preventDefault();

    let message = document.getElementById("message");

    if (validName && validEmail && validNumber) {
        message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> Your data has been submitted!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000)

    }
    else {
        message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error</strong> Your data has not been submitted!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000)

    }
}
/*
setTimeout(() => {
    message.innerHTML = "";
})
*/
