function validateform() {   
var NAME=document.form1.NAME.value;  
var Address=document.form1.Address.value;
var CITY=document.form1.CITY.value;
var STATE=document.form1.STATE.value;
var POSTALCODE=document.form1.POSTALCODE.value;
var CONTACTNUMBER=document.form1.CONTACTNUMBER.value;
var EMAIL=document.form1.EMAIL.value;
  
  
if (NAME==null || NAME==""){  
  alert("Name can't be blank");  
  return false;
}else if (Address==null || Address==""){
  alert("Please enter your address");
  return false;
}else if (CITY==null || CITY==""){
  alert("Please enter the name of the city");
  return false;
}else if (STATE==null || STATE==""){
  alert("Please enter the name of the state");
  return false;
}else if (POSTALCODE.length<6){
  alert("Postal code must be at least 6 characters");
  return false;
}else if (CONTACTNUMBER.length<8){
  alert("Contact number must be at least 8 characters");
  return false;
}else if (EMAIL==null || EMAIL==""){
  alert("Please enter your e-mail");
  return false;
}
}