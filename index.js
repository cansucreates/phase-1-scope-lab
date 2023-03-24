// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return upperCaseCustomerName;
}

function setBestCustomer() {
  var bestCustomer = 'not a bob';
  return bestCustomer;
}
bestCustomer = setBestCustomer();

function overwriteBestCustomer(param1) {
  bestCustomer = param1;
}
//overwriteBestCustomer('Cansu');

const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob';
  console.log(`The least favorite customer is ${leastFavoriteCustomer}`);
}
changeLeastFavoriteCustomer(); 


