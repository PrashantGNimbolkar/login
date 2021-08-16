let username = document.getElementById("un");
let password = document.getElementById("pw");
let sub = document.getElementById("sub");
sub.addEventListener("click", funs);


function funs() {
    let upass = localStorage.getItem(username.value);
    if (upass != "" || password.value != "") {
        if (upass == password.value) {
            document.getElementById("demo").innerHTML = "log in successful !!!";
            window.alert("log in successful !!!")
        } else {
            document.getElementById("demo").innerHTML = "The Username or Password is Incorrect Please re-enter or Click on New User to register";
            window.alert("log in fail !!!")
        }
    }else{
        window.alert("enter user id password")
        
    }
    username.value = "";
    password.value = "";
}