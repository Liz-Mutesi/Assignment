function validationForm(){
    let email = document.forms["SignupForm"]["InputEmail"];
    let pass = document.forms["SignupForm"]["Password"];
    let checkbox = document.forms["SignupForm"]["Check"];
    let select = document.forms["SignupForm"]["Select"];
    
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@#$!%*?&^()]{8,}$/
    
    }
    if(email.value == "" || !emailRegex.test(email.value)){
        alert("Please enter your email");
        email.style.border = "2px solid red";
        email.innerHTML = "Please enter your email"
        email.focus();
        // email.focus();
    }
    if(email.value.indexOf("@", 0)<0 || email.value.indexOf ("."),0 <0 ){
      alert("Please enter a valid email address");
        email.focus();
       return false;
    }
    else {
        email.style.border = "2px solid green";
    }
    if (pass.value == "" || !passRegex.test(pass.value)) {
         alert("Please enter your password");
        pass.style.border = "2px solid red";
        pass.focus();
        return false;
      }
      else {
        pass.style.border = "2px solid green";
      }
      if (select.selectedIndex < 1) {
        // alert("Please enter your course.");
        select.focus();
        select.style.border = "2px solid red";
        return false;
      }
      else {
        select.style.border = "2px solid green";
      }
      return true;
    

    

