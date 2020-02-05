// function
function selectElement(name) {
  //console.log("TEST");
  return document.getElementById(name);
}

var form_suc = "success";

var f_name = "firstname";
var f_input = "fname";

var customers = "customers";
//error
var l_name = "lastname";
var l_input = "lname";
///
var inp_email = "email1";
var email = "email";

var pass = "password";
var pas_inp = "pass_word";

var handleSignup = {
  // variables
  users: [], // To Store all the users who filled the form
  counter: 1, // this.counter variable to provide unique name for local stroage , key-value pair
  error: {}, //to map error with respecting field

  sucess_for: selectElement(form_suc),
  //first name and it's css properties
  firstname: selectElement(f_name),
  firstinput: selectElement(f_input),
  //last name and it's css properties
  lastname: selectElement(l_name),
  lastinput: selectElement(l_input),
  //email and it's css properties
  email: selectElement(email),
  input_email: selectElement(inp_email),
  //pass and it's css properties
  password: selectElement(pass),
  reppass: selectElement(pas_inp),

  /** checks postion of @ and . in email and predicts for valid or invalid mail
   *  Returns boolean value , true for valid mail false for invalid mail
   * @param {string}
   * @return {boolean}
   */

  valid_email: function(email) {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2) return true;
    else return false;
  },

  /** validates all the field of form if they are empty or less tham required len
   * @param {obj} //object ,data filled by user
   * @return {boolean} // returns true if all filled data is correct
   */

  validate: function(obj) {
    console.log(this.lastinput); // why null ??????????????
    //first name validation
    if (obj.fname === "") {
      this.error.fname = true;
    }
    //last name validation
    if (obj.lname === "") {
      this.error.lname = true;
    }
    //email validation
    if (this.valid_email(obj.email)) this.error.email = true;

    //password vaalidation is less than 6

    if (obj.password.length < 6) {
      this.error.password = true;
    }
    if (obj.password !== obj.r_password) {
      this.error.password = true;
    }
    //checking form input data if any field  have error then return false
    for (i in this.error) {
      if (this.error[i] === true) {
        return false;
      }
    }
    // if everything is correct add data to table
    return true;
  },

  /** insert data in table dynamically and updates data in first row
   * @param {obj} //object ,data filled by user
   */
  insert: function(obj) {
    var isvalid = this.validate(obj);
    if (isvalid === true) {
      // insert only if all inputs are valid and user wants to insert
      var table = selectElement(customers);
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

      //success message
      this.sucess_for.innerHTML = "Form successfully submitted";
      setTimeout(function() {
        this.sucess_for.innerHTML = "";
      }, 3000);
    }

    this.users.push(obj);
    localStorage.setItem("user" + this.counter, obj);
    this.counter++; // creating unique id for each user
  },
  set: function() {
    //console.log("SET");
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
    this.users.push(obj);
    this.insert(obj);
  },

  /** first function that will be called on submiting the form
   */

  validateForm: function() {
    this.error.fname = false; //intailly intinalizse all fields with false ,we assume user will insert correct input
    this.error.lname = false;
    this.error.email = false;
    this.error.password = false;

    event.preventDefault();
    this.set();
    this.show_error(); // error msg at the  end
  },
  /** show error and apply dyanamic class to wrong input field
   */

  show_error: function() {
    if (this.error.fname) {
      this.firstname.innerHTML = "hello";
      this.firstinput.className = "err";
    } else {
      this.firstinput.className = "myclass";
      this.firstname.innerHTML = "";
    }
    if (this.error.lname) {
      this.lastinput.className = "err";
      this.lastname.innerHTML = "hello2";
    } else {
      this.lastname.innerHTML = "";
      this.lastinput.className = "myclass";
    }
    if (this.error.email) {
      this.input_email.className = "err";
      this.email.innerHTML = "Invalid email";
    } else {
      this.email.innerHTML = "";
      this.input_email.className = "myclass";
    }
    if (this.error.password) {
      this.password.innerHTML = "Invalid password";
      this.reppass.className = "err";
    } else {
      this.password.innerHTML = "";
      this.reppass.className = "myclass";
    }
  }
};
