// Write your solution in this file!
var customerName = "bob"; // declaring a variable in global scope using the var keyword

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); 
}

function setBestCustomer() {
  bestCustomer = "not bob"; 
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Jill"; 

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Mary"; 
}
