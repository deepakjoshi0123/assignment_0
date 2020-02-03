
var users=[];
var counter =1;
var error={};
var check =false;

function validate(obj)
{
        //first name validation
    if (obj.fname == "") {
      console.log("hellooo222");
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
          //password vaalidation

          if(obj.password.length<6){  
            error.password=true;    
          }
        if(obj.password==obj.r_password){  // do nothing 
            
        }  
        else{  
         error.password=true
        }    
       
       /* for(i in error)
         { 
           console.log(i.second);
           if(i==true)
            { 
               return false; 
              }
          }  
        return true;     
    */
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
    //  document.getElementById("firstname").style.borderColor = "red";  ???
   //  console.log( document.getElementById("firstname").style.borderColor);
 //  document.getElementById("firstname").className = "err";
    }
    else 
    {
      document.getElementById("firstname").innerHTML = "";
    }
    if(error.lname)
    {
      document.getElementById("lastname").innerHTML = "Requried Field cannot be left blank";

    }
    else 
    {
      document.getElementById("lastname").innerHTML = "";
    }
    if(error.email)
    {
      document.getElementById("email").innerHTML = "Invalid email";
    }
    else 
    {
      document.getElementById("email").innerHTML = "";
    }
    
    if(error.password)
    {
      document.getElementById("password").innerHTML = "invalid password";
    }
    else 
    {
      document.getElementById("password").innerHTML = "";
    }
} 

