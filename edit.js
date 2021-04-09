function output(){
    User = document.getElementById("name").value;
    localStorage.setItem("User" , User);
    Age = document.getElementById("age").value;
    localStorage.setItem("Age" , Age);
    Email = document.getElementById("Email").value;
    localStorage.setItem("Email" , Email);
    window.location="output.html";

}