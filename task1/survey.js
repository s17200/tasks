

function Submit(){
    event.preventDefault();
    let email=document.getElementById("input1").value;
    let number=document.getElementById("mobile").value; 
    let country=document.getElementById("countryCode").value;
  

    localStorage.setItem("email", email );
    localStorage.setItem("number", number );
    localStorage.setItem("country", country );
    window.open("./thankyou.html")
}