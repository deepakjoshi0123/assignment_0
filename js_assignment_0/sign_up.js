var handleSignup = {
  var: (users = []), // To Store all the users who filled the form
  var: (counter = 1), // counter variable to provide unique name for local stroage , key-value pair
  var: (error = {}), //to map error with respecting field

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
    //first name validation
    if (obj.fname === "") {
      error.fname = true;
    }
    //last name validation
    if (obj.lname === "") {
      error.lname = true;
    }
    //email validation
    if (this.valid_email(obj.email)) error.email = true;

    //password vaalidation is less than 6

    if (obj.password.length < 6) {
      error.password = true;
    }
    if (obj.password !== obj.r_password) {
      error.password = true;
    }
    //checking form input data if any field  have error then return false
    for (i in error) {
      if (error[i] === true) {
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
    localStorage.setItem("user" + counter, obj);
    counter++; // creating unique id for each user
  },
  set: function() {
    console.log(document.getElementById("firstname").style.borderColor);
    var obj = {};
    // for (field in document.forms["myForm"]){
    //   obj[field] = document.forms["myForm"][field].value;
    // }

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
    this.insert(obj);
  },

  /** first function that will be called on submiting the form
   */

  validateForm: function() {
    error.fname = false; //intailly intinalizse all fields with false ,we assume user will insert correct input
    error.lname = false;
    error.email = false;
    error.password = false;
    event.preventDefault();
    this.set();
    this.show_error(); // error msg at the  end
    this.submitUserForm();
  },
  /** show error and apply dyanamic class to wrong input field
   */

  show_error: function() {
    if (error.fname) {
      document.getElementById("firstname").innerHTML =
        "Requried Field cannot be left blank";
      document.getElementById("fname").className = "err";
    } else {
      document.getElementById("fname").className = "myclass";
      document.getElementById("firstname").innerHTML = "";
    }
    if (error.lname) {
      document.getElementById("lname").className = "err";
      document.getElementById("lastname").innerHTML =
        "Requried Field cannot be left blank";
    } else {
      document.getElementById("lastname").innerHTML = "";
      document.getElementById("lname").className = "myclass";
    }
    if (error.email) {
      document.getElementById("myemail").className = "err";
      document.getElementById("email").innerHTML = "Invalid email";
    } else {
      document.getElementById("email").innerHTML = "";
      document.getElementById("myemail").className = "myclass";
    }

    if (error.password) {
      document.getElementById("pass_word").className = "err";
      document.getElementById("password").innerHTML = "invalid password";
    } else {
      document.getElementById("password").innerHTML = "";
      document.getElementById("pass_word").className = "myclass";
    }
  },
  submitUserForm: function() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
      document.getElementById("g-recaptcha-error").innerHTML =
        '<span style="color:red;">This field is required.</span>';
      return false;
    }
    return true;
  },
  verifyCaptcha: function() {
    document.getElementById("g-recaptcha-error").innerHTML = "";
  }
};
