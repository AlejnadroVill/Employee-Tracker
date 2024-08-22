const inquirer = require("inquirer");
const {
  getDepartments,
  getRoles,
  getEmployees,
} = require("../queries/queries");
const { actionMenu } = require("./questions");

let departmentList = [];
let roleList = [];
let employeeList = [];

async function loadData() {
  departmentList = await getDepartments();
  roleList = await getRoles();
  employeeList = await getEmployees();
}

async function runInquirer() {
  await loadData();

  inquirer.prompt(actionMenu).then(async (answers) => {
    switch (answers.selectedAction) {
      case "View Departments":
        break;
      case "View Roles":
        break;
      case "View Employees":
        break;
      case "Add Department":
        break;
      case "Add Role":
        break;
      case "Add Employee":
        break;
      case "Update Employee Role":
        break;
      case "Quit program":
        break;
    }
  });
}

module.exports = {
  runInquirer,
};
