let username=document.getElementById("un");
let password=document.getElementById("pw");
let reg=document.getElementById("reg");
reg.addEventListener("click",funr);


function funr(){
    if(username.value=="" || password.value=="" || document.getElementById("m").value=="" || document.getElementById("M").value==""){
        window.alert("enter all following details")
    }
    else{
        localStorage.setItem(username.value,password.value);
        document.getElementById("demo").innerHTML = ` Registration Successful !!!<br>
        <a href="index.html" style="color:green">Click To Log In Page</a>`;
    }

    username.value="";
    password.value="";
    document.getElementById("m").value="";
    document.getElementById("M").value="";
}
