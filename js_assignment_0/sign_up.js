
var users=[];
var counter =1;
var error={};
function validate(obj)
{
        //first name validation
    if (obj.fname == "") {
      //alert(" First Name must be filled out");
      console.log("hellooo222")
     // document.getElementById("firstname").innerHTML = "Requried Field cannot be left blank";
     document.getElementById('firstname').style.Color = "red";
     
      error.fname=true;
    }
         //last name validation 
    if (obj.lname == "") {
     // document.getElementById("lastname").innerHTML = "Requried Field cannot be left blank";
     error.lname=true;
        
      }
      //email validation
      var atposition=obj.email.indexOf("@");  
      var dotposition=obj.email.lastIndexOf(".");  
      if (atposition<1 || dotposition<atposition+2)
      {  
       // document.getElementById("email").innerHTML = "Invalid Email";
       error.email=true;
        
        }  
          //password vaalidation

          if(obj.password.length<6){  
            //document.getElementById("password").innerHTML = "password should be greater than 6 char";
            error.password=true;
            
          }
        if(obj.password==obj.r_password){  
            
        }  
        else{  
         // document.getElementById("firstname").innerHTML = "password should be same";
         error.password=true;
         
        }    
  
}

function show_users()
{
  //  console.log('hello');
    set();
}
function insert(obj)
{
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
    //  localStorage.setItem('user'+counter,obj);
      counter++;
}
function set()
{
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
    users.push(obj);

    insert(obj);
}

function validateForm() {
  error.fname=false;error.lname=false;error.email=false;error.password=false;  
    setTimeout(()=>{},5000);
    event.preventDefault();
  //  console.log(users);
      show_users();
      show_error();
    
}

function show_error()
{
  {
    if(error.fname)
    {
      document.getElementById("firstname").innerHTML = "Requried Field cannot be left blank";
      document.getElementById('firstname').style.borderColor = "red";
    }
    if(error.lname)
    {
      document.getElementById("lastname").innerHTML = "Requried Field cannot be left blank";
    }
    if(error.email)
    {
      document.getElementById("email").innerHTML = "Invalid email";
    }
    if(error.password)
    {
      document.getElementById("password").innerHTML = "invalid password";
    }
    
  }
}
