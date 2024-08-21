const { addRole } = require("../queries/queries");

const actionMenu = [
  {
    type: "rawlist",
    name: "selectedAction",
    message: "Choose an action:",
    choices: [
      "View Departments",
      "View Roles",
      "View Employees",
      "Add Department",
      "Add Roles",
      "Add Employees",
      "Update Employee Role",
      "Quit Program",
    ],
  },
];

const addDepartmentQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the name of the new department",
  },
];

function addRoleQuestions(departmentList) {
  const departmentNames = departmentList.map((department) => department.name);

  const questions = [
    {
      type: "input",
      name: "title",
      message: "Insert the title of the new Role",
    },
    {
      type: "input",
      name: "salary",
      message: "Insert the salary of the role",
    },
    {
      type: "rawlist",
      name: "department",
      message: "Choose a department",
      choices: departmentNames,
    },
  ];
  return questions;
}

function addEmployeeQuestions(roleList, employeeList) {
  const roleTitles = roleList.map((role) => role.title);
  const managerNames = employeeList.map(
    (employee) => `${employee.first_name} ${employee.last_name}`
  );

  const questions = [
    {
      type: "input",
      name: "firstName",
      message: "Insert the first name of the new employee",
    },
    {
      type: "input",
      name: "lastName",
      message: "Insert the last name of the new employee",
    },
    {
      type: "rawlist",
      name: "role",
      message: "Choose a role",
      choices: roleTitles,
    },
    {
      type: "rawlist",
      name: "manager",
      message: "Choose a manager",
      choices: [...managerNames, "No one"],
    },
  ];
  return questions;
}

function updateEmployeeRoleQuestions(roleList, employeeList) {
  const roleTitles = roleList.map((role) => role.title);
  const employeeNames = employeeList.map(
    (employee) => `${employee.first_name} ${employee.last_name}`
  );

  const questions = [
    {
      type: "rawlist",
      name: "employeeName",
      message: "Choose an employee",
      choices: [employeeNames],
    },
    {
      type: "rawlist",
      name: "newRole",
      message: "Choose a role",
      choices: roleTitles,
    },
  ];
  return questions;
}

module.exports = {
  actionMenu,
  addDepartmentQuestions,
  addRoleQuestions,
  addEmployeeQuestions,
  updateEmployeeRoleQuestions,
};
