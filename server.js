const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require("mysql2");
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER,
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employee_tracker_db database.`)
);

const menu = () => {
  inquirer
    .prompt({
      message: "Good morning Mr.Fury, What would you like to access?",
      name: "menu",
      type: "list",
      choices: [
        "View all departments",
        "View all positions",
        "View all employees",
        "Add a department",
        "Add a job position",
        "Add an employee",
        "Update employee job position",
        "Exit",
      ],
    })
    // The switch statement will execute the statement until a break or the end of the statement is executed.
    .then((response) => {
      switch (response.menu) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all positions":
          viewAllPositions();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a position":
          addPosition();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Update Employee Position":
          updateEmployee();
          break;
        case "Exit":
          db.end();
          break;
        default:
          db.end();
      }
    });
};

//Query database
// Allows the user to VIEW all departments
const viewAllDepartments = () => {
  db.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.log(res);
    menu();
  });
};

// Allows the user to VIEW all positions
const viewAllPositions = () => {
  db.query("SELECT * FROM position", function (err, res) {
    if (err) throw err;
    console.log(res);
    menu();
  });
};

// Allows the user to VIEW all employees
const viewAllEmployees = () => {
  db.query(
    "SELECT employee.id, first_name, last_name, title, salary, department_name, manager_id FROM ((department JOIN role ON department.id = role.department_id) JOIN employee ON role.id = employee.role.id);",
    function (err, res) {
      if (err) throw err;
      console.log(res);
      menu();
    }
  );
};

// Allows the user to ADD a department
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "Department name.",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO department(department_name) VALUES (?)",
        [answer.department],
        function (err, res) {
          if (err) throw err;
          console.log("Department has been successfully added!");
          menu();
        }
      );
    });
};

// Allows the user to ADD an a position
const addPosition = () => {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Enter in a job title.",
      },
      {
        name: "salary",
        type: "input",
        message: "Enter in a salary.",
      },
      {
        name: "departmentId",
        type: "input",
        message: "Enter in a department ID number",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [answer.title, answer.salary, answer.departmentId],
        function (err, res) {
          if (err) throw err;
          console.log("Position has been successfully added!");
          menu();
        }
      );
    });
};

// Allows the user to ADD an employee
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "Enter in employee's first name.",
      },
      {
        name: "lastName",
        type: "input",
        message: "Enter in employee's last name.",
      },
      {
        name: "roleId",
        type: "input",
        message: "Enter in employee's job ID number.",
      },
      {
        name: "managerId",
        type: "input",
        message: "Enter in manager's ID number.",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manger_id) VALUES (?, ?, ?, ?)",
        [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
        function (err, res) {
          if (err) throw err;
          console.log("Employee has been successfully added!");
          menu();
        }
      );
    });
};

// Allows the user to UPDATE an employee's id
const updateEmployee = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Please enter in new employees ID number.",
      },
      {
        name: "roleId",
        type: "input",
        message: "Please enter in new ID number.",
      },
    ])
    .then((answer) => {
      db.query(
        "UPDATE employee SET position_id=? WHERE id=?"[
          (answer.id, answer.roleId)
        ],
        function (err, res) {
          if (err) throw err;
          console.log("File has been updated!");
          menu();
        }
      );
    });
};
