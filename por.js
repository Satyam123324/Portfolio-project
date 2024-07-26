let rebtn = document.getElementById("rebtn");
let submit = document.getElementById("submit");

rebtn.addEventListener("click", function(){
    alert("Download succesfully")
})

submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Fill Detail")
    } else{
        alert("Logged In")
    }

})
