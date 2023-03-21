// Write your solution in this file!
var customerName = "bob"; // declaring a variable in global scope using the var keyword

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // accessing the global customerName variable and uppercasing it
}

function setBestCustomer() {
  bestCustomer = "not bob"; // declaring a variable in global scope and assigning it a value from inside a function
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // changing the value of the global variable bestCustomer
}

const leastFavoriteCustomer = "Jill"; // declaring a constant in global scope using the const keyword

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Mary"; // attempting to change the value of the constant leastFavoriteCustomer, which will result in an error
}
