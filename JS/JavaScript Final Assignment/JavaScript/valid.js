function validate(){
    var username=document.getElementById("name1").value;
    var userFatherName=document.getElementById("fatherName").value;
    var userEmail=document.getElementById("mail").value;
    var userMobNumber=document.getElementById("mobileNumber").value;
    var dateOfBirth=document.getElementById("dob").value;
    var address1=document.getElementById("addressline")
    var city1=document.getElementById("city").value;
    var zip1=document.getElementById("zip");
   
     if(username.value!="null"){
         regx=/[A-Z a-z +]/;
         if(regx.test(username)){
             alert("The Name is valid");
             document.getElementById("name1").innerHTML="valid";
             document.getElementById("name1").style.visibility="visible";
             document.getElementById("name1").style.color="green";
            
             return true;
         }
         else{
             alert("The Name is invalid");
             document.getElementById("name1").innerHTML="valid";
             document.getElementById("name1").style.visibility="visible";
             document.getElementById("name1").style.color="red";
             return false;
         }

    }else{
          alert("The name is invalid");
          document.getElementById("name1").innerHTML="valid";
          document.getElementById("name1").style.visibility="visible";
          document.getElementById("name1").style.color="red";
          
          
    }
     

     
    if(userMobNumber.value!="null"){
        regx=/^[8-9]\d{9}$/;
        if(regx.test(userMobNumber)){
            alert("The number is valid");
            document.getElementById("mobileNumber1").innerHTML="valid";
            document.getElementById("mobileNumber1").style.color="green";
  
            return true;
        }
        else{
            alert("Input mobile number is invalid");
            return false;
        }
    }else{
        alert("The number is invalid");
    }
       
    if(userEmail.value!="null"){

        regx=/^([a-z A-z 0-9])@([a-z A-Z 0-9]).([a-z])$/;
        if(regx.test(userEmail)){
           alert("The mail is correct");
           

       }
        else{
           alert("Input mail not valid");
       }
     
    }
       
    

 }
