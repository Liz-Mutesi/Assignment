function validationForm(){
  let usermail = document.forms["SignupForm"]["Email"];
  let password = document.forms["SignupForm"]["Password"];
  //let checkbox= document.forms["SignupForm"]["checkbox"]
 
  usermailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@#$!%*?&^()]{8,}$/
  
  alphaNumeric = /^[A-Za-z0-9]+$/

  if(usermail.value == ""|| !usermailRegex.test(usermail.value) ){
      //alert("Please enter your email");
      usermail.style.border = "2px solid red";
      alert("Please enter email")
      //email.focus();
      return false
   } else{ usermail.style.border = "2px solid green";
      
  }
  
  if(password.value == "" || !passwordRegex.test(password.value)){
      alert("Please enter password! It must contain a number, a special character and be atleast 8 characters");
      password.style.border = "2px solid red";
      //password.focus();
      return false;
  }
  else { password.style.border = "2px solid green";

  }

  let checkbox = document.getElementById("checkbox");
  
  if(!checkbox.checked){
   alert("Please agree to our terms and conditions");
   
   }
  else{ checkbox.checked = "Please proceed"; // not working
 
   }
  let select = document.getElementById("select");

  if(select == ""){
    alert("Please indicate your age");
     return false;
   }
  else{ return true;

   }
}