function validationForm(){
    let username = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["Email"];
    let password = document.forms["RegForm"]["Password"];
    let phone = document.forms["RegForm"]["Telephone"];
    //let username = document.forms["RegForm"]["username"];
    
    if(username.value == ""){
        //alert("Please enter your name");
        username.style.border = "2px solid red";
        //username.innerHTML = "Please enter your name";
        //username.focus();
        return false;
    }
    else { username.style.border = "2px solid green";

    }

    if(email.value == ""){
        //alert("Please enter your email");
        email.style.border = "2px solid red";
        //email.focus();
        return false
    } else{ email.style.border = "2px solid green";
        
    }
    if(email.value.indexOf("@", 0)<0 || email.value.indexOf ("."),0 <0 ){
        //alert("Please enter a valid email address");
        email.style.border = "2px solid red";
        //email.focus();
        return false;
    } else { email.style.border = "2px solid green";
    }

    if(password.value == "" || password.value.length != 6){
        //alert("Please enter your password");
        password.style.border = "2px solid red";
        //password.focus();
        return false;
    }
    else { password.style.border = "2px solid green";

    }

    if(phone.value == "" || phone.value.length != 10){
        //alert("Please enter your valid phone number");
        phone.style.border = "2px solid red";
        //phone.focus();
        return false;
    } else { phone.style.border = "2px solid green";
}
}
