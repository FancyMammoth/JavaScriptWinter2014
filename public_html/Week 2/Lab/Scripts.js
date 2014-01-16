/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function submitForm() {
    
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    
    
    if ( fullname.value.length > 0 ) {
        fullname.className = "good";
        fullnameErr.innerHTML ="Ok!";
        fullnameErr.classname = "valid";
    } else {
        fullname.className = "bad";
        fullnameErr.innerHTML = "Full name is not entered.";
        fullnameErr.classname = "error";
        
    }
    
    var email = document.getElementById("email");
    var emailErr = document.getElementById("err_email");
    
    
    
    if (email.value.length <= 0 ) {
        email.className = "bad";
        emailErr.innerHTML = "Email was empty";
        emailErr.classname = "error";
        
    }
    
    else if(email.value.indexOf("@") === -1) {
        email.className = "bad";
        emailErr.innerHTML = "@ was missing from email";
        emailErr.classname = "error";
    }
    else if(email.value.indexOf(".") === -1) {
        email.className = "bad";
        emailErr.innerHTML = ". was missing from email.";
        emailErr.classname = "error";
}
    else {
        email.className = "good";
        emailErr.innerHTML = "";
        emailErr.classname = "valid";
    }

    var comment = document.getElementById("comments");
    var commentErr = document.getElementById("err_comments");

     if (comment.value.length <= 0 ) {
        comment.className = "bad";
        commentErr.innerHTML = "Comments are empty";
        commentErr.classname = "error";
     }
     
     else if (comment.value.length >= 150) {
        comment.className = "bad";
        commentErr.innerHTML = "Comments to long 150 char max.";
        commentErr.classname = "error";
     }
     
     else{
         comment.className = "good";
        commentErr.innerHTML = "";
        commentErr.classname = "valid";
     }
}