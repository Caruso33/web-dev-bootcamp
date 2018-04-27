var faker = require('faker');
// var randomName
// var randomEmail
var productName
var productPrice
var str = `===================\n`
str += `WELCOME TO MY SHOP!\n`
str += `===================\n`

for (var i = 0; i < 10; i++) {
  // randomName = faker.name.findName();
  // randomEmail = faker.internet.email();

  productName = faker.commerce.productName();
  productPrice =  faker.commerce.price();

  // str = `${randomName} with email: ${randomEmail}
  //   makes the unique offer of a ${productName} to the
  //   unbelievable price of ${productPrice}\n`
  str += `${productName} - $${productPrice}\n`
}
console.log(str);
