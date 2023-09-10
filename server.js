const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Tech2015!',
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the employee_tracker_db database.`)
);


const menu = () => {
  inquirer.prompt({
    message: "What would you like to do today?",
    name: "menu",
    type: "list",
    choices: [
      "View all departments",
      "View all job positions",
      "View all employees",
      "Add a department",
      "Add a job position",
      "Add an employee",
      "Update employee job position",
      "Back to menu",
    ],
  })
}