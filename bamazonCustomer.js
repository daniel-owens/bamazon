var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

var userIdNumber;
var userQuantity;

function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price);
    }
    console.log("-----------------------------------");

    inquirer
    .prompt([{
      name: "purchaseID",
      type: "input",
      message: "Enter the ID number of the product you would like to purchase:",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }      
    },{
      name: "purchaseQuant",
      type: "input",
      message: "How many units of this product do you want?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }      
    }])
    .then(function(answer) {
     console.log(answer);
     userIdNumber = answer.purchaseID;
     userQuantity = answer.purchaseQuant;
     checkInventory();
     
    });
  });
}  

function checkInventory() {
  connection.query("SELECT product_name, price, stock_quantity FROM products WHERE ?", { item_id: userIdNumber }, function(err, res) {
    if (err) throw err;
    if (userQuantity < res[0].stock_quantity) {
      updateInventory(userQuantity, res[0].stock_quantity, userIdNumber);
    } else {
      console.log("Sorry chump - you're outta luck.");
      start();
    }
    console.log(res);
  })
}

function updateInventory(purchaseQuantity, stockQuantity, productId) {
	connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: stockQuantity - purchaseQuantity }, { item_id: productId }], function(err, res) {
		if (err) return console.log(err)
		console.log(res);
		start();
	})
}












