const inquirer = require("inquirer");
const {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("../queries/queries");
const {
  actionMenu,
  addDepartmentQuestions,
  addRoleQuestions,
  addEmployeeQuestions,
  updateEmployeeRoleQuestions,
} = require("./questions");

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
        if (departmentList.length !== 0) {
          console.log(departmentList);
        } else {
          console.log("There are no departments");
        }
        await runInquirer();
        break;
      case "View Roles":
        if (roleList.length !== 0) {
          console.log(roleList);
        } else {
          console.log("There are no roles");
        }
        await runInquirer();
        break;
      case "View Employees":
        if (employeeList.length !== 0) {
          console.log(employeeList);
        } else {
          console.log("There are no employees");
        }
        await runInquirer();
        break;
      case "Add Department":
        inquirer.prompt(addDepartmentQuestions).then(async (answers) => {
          await addDepartment(answers.name);
          await runInquirer();
        });
        break;
      case "Add Role":
        inquirer
          .prompt(addRoleQuestions(departmentList))
          .then(async (answers) => {
            const { title, salary, department } = answers;

            const choosenDepartment = departmentList.filter(
              (item) => item.name === department
            );
            await addRole(title, salary, choosenDepartment[0].id);
            await runInquirer();
          });
        break;
      case "Add Employee":
        inquirer
          .prompt(addEmployeeQuestions(roleList, employeeList))
          .then(async (answers) => {
            const { firstName, lastName, role, manager } = answers;

            const choosenRole = roleList.filter((item) => item.title === role);

            const choosenManager = employeeList.filter(
              (item) => `${item.first_name} ${item.last_name}` === manager
            );

            if (choosenManager.length === 0) {
              await addEmployee(firstName, lastName, choosenRole[0].id, null);
            } else {
              await addEmployee(
                firstName,
                lastName,
                choosenRole[0].id,
                choosenManager[0].id
              );
            }
            await runInquirer();
          });

        break;
      case "Update Employee Role":
        inquirer
          .prompt(updateEmployeeRoleQuestions(roleList, employeeList))
          .then(async (answers) => {
            const { employeeName, newRole } = answers;

            const choosenRole = roleList.filter(
              (item) => item.title === newRole
            );

            const choosenEmployee = employeeList.filter(
              (item) => `${item.first_name} ${item.last_name}` === employeeName
            );

            await updateEmployeeRole(choosenEmployee[0].id, choosenRole[0].id);
            await runInquirer();
          });

        break;
      case "Quit program":
        break;
    }
  });
}

module.exports = {
  runInquirer,
};
