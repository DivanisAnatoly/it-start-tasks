var Product = require('./product')

let product1 = new Product("shirt", 620, 24, "cotton shirt");
let product2 = new Product("ball", 2000, 6, "volleyball and football balls");
let product3 = new Product("phone", 35900, 20, "new Samsung A50");
let product4 = new Product("knife", 475, 15, "best steel");
let product5 = new Product("socks", 79, 43, "white, woolen");

let products = [product1, product2, product3, product4, product5];


console.log(Product.filter(products,"name-contains-shir&price-=620&quantity->5&description-ends-rt"));
console.log();
console.log(Product.filter(products,"description-contains-hi&quantity->=20"));