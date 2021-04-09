var username = localStorage.getItem("User");
var userage = localStorage.getItem("Age");
var useremail = localStorage.getItem("Email");
document.getElementById("outputname").innerHTML = username;
document.getElementById("outputage").innerHTML = userage;
document.getElementById("outputemail").innerHTML = useremail;

function backedit(){
    window.location="edit.html";

}