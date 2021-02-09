console.log("Heloooooeew")

let username = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");


username.addEventListener("input",() =>{
    console.log("name is blurred");
    let regex = /^[a-z][a-zA-Z0-9]{2,10}$/;

    let str = username.value;

    if(regex.test(str)){
        console.log("it's matched");

        username.classList.remove("textbox");
    }
    else{
        console.log("it's not matched");
        username.classList.add("textbox");
    }

})  


email.addEventListener("input",() =>{
    console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;

    if(regex.test(str)){
        console.log("it's matched");

        email.classList.remove("textbox");
    }
    else{
        console.log("it's not matched");
        email.classList.add("textbox");
    }

})  


number.addEventListener("input",() =>{
    console.log("number is blurred");
    let regex = /^([0-9]){10}$/;

    let str = number.value;

    if(regex.test(str)){
        console.log("it's matched");

        number.classList.remove("textbox");
    }
    else{
        console.log("it's not matched");
        number.classList.add("textbox");
    }

})  


