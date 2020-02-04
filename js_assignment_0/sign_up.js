
var users=[];
var counter =1;
var error={};
var check =false;

function validate(obj)
{
        //first name validation
    if (obj.fname == "") {
     
      error.fname=true;   
    }
         //last name validation 
    if (obj.lname == "") {
     error.lname=true;   
      }
      //email validation
      var atposition=obj.email.indexOf("@");  
      var dotposition=obj.email.lastIndexOf(".");  
      if (atposition<1 || dotposition<atposition+2)
      {  
       error.email=true;
        }  
          //password vaalidation is less than 6

          if(obj.password.length<6){  
            error.password=true;    
          }
        if(obj.password==obj.r_password){  // do nothing 
           console.log("password same") 
        }  
        else{  
         error.password=true
        }    
       //checking form input data if any field  have error then return false 
        for(i in error)
         { 
           if(error[i]==true)
            { 
               return false; 
              }
          }  
          // if everything is correct add data to table 
        return true;     
    
}

function insert(obj)
{
  console.log(validate(obj));
       if(validate(obj)==true)
        {
        var table = document.getElementById("customers");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
       
        cell1.innerHTML = obj.fname;
        cell2.innerHTML = obj.lname;
        cell3.innerHTML = obj.email;
        cell4.innerHTML = obj.gender;
        cell5.innerHTML = obj.vech;
        cell6.innerHTML = obj.birth;
        }
      users.push(obj);
      console.log(obj,"inside insert()");
    //  localStorage.setItem('user'+counter,obj);
      counter++;
}
function set()
{
  console.log( document.getElementById("firstname").style.borderColor);
    var obj = {};
    obj.fname = document.forms["myForm"]["fname"].value;
    obj.lname = document.forms["myForm"]["lname"].value;
    obj.email = document.forms["myForm"]["email"].value;
    obj.password = document.forms["myForm"]["password"].value;
    obj.r_password = document.forms["myForm"]["r_password"].value;
    obj.gender = document.forms["myForm"]["gender"].value;
    obj.vech = document.forms["myForm"]["vech"].value;
    obj.birth = document.forms["myForm"]["birth"].value;
    obj.msg = document.forms["myForm"]["msg"].value;
   // users.push(obj);
    console.log("insdie set()");
    insert(obj);
}

function validateForm() {
  error.fname=false;error.lname=false;error.email=false;error.password=false;  
    setTimeout(()=>{},5000);
    event.preventDefault();
  //  console.log(users);
      set();
      show_error();  // validating at end 
    
}

//working properly

function show_error()
{
  
    if(error.fname)
    {
      document.getElementById("firstname").innerHTML = "Requried Field cannot be left blank";
      document.getElementById("fname").className = "err";
    }
    else 
    {
      document.getElementById("fname").className = "myclass";
      document.getElementById("firstname").innerHTML = "";
     
    }
    if(error.lname)
    {
      document.getElementById("lname").className = "err";
      document.getElementById("lastname").innerHTML = "Requried Field cannot be left blank";

    }
    else 
    {
      document.getElementById("lastname").innerHTML = "";
      document.getElementById("lname").className = "myclass";
    }
    if(error.email)
    {
      document.getElementById("myemail").className = "err";
      document.getElementById("email").innerHTML = "Invalid email";
    }
    else 
    {
      document.getElementById("email").innerHTML = "";
      document.getElementById("myemail").className = "myclass";
    }
    
    if(error.password)
    {
      document.getElementById("pass_word").className = "err";
      document.getElementById("password").innerHTML = "invalid password";
    }
    else 
    {
      document.getElementById("password").innerHTML = "";
      document.getElementById("pass_word").className = "myclass";
    }
} 

