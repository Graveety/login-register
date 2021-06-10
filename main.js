
 //login registration positions
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
  //form box
var modal = document.getElementById("login-form");
window.onclick = function(event)

{
    if(event.target == modal)
    {
        modal.style.display = "none";
    }
}



//onclick login
let data = [];

function onClickAddButton(){

    let allData = {
        email: document.getElementById("input-email").value,
        password: document.getElementById("input-password").value,
        
    }


    data.push(allData);
    

    document.querySelector('form').reset();

    console.log(JSON.stringify(allData));


    localStorage.setItem('storeData', JSON.stringify(data));


}

//onclick register

let dataReg = [];

function onClickAddButtonReg(){

    let allDataReg = {
        firstName: document.getElementById("input-name-first").value,
        lastName: document.getElementById("input-name-last").value,
        email: document.getElementById("input-email-reg").value,
        password: document.getElementById("input-password-reg").value,
        confirmPassword: document.getElementById("input-password-reg2").value

    }

    

    dataReg.push(allDataReg);
    

    document.querySelector('form').reset();

    console.log(JSON.stringify(allDataReg));


    localStorage.setItem('storeData2', JSON.stringify(dataReg));


}






