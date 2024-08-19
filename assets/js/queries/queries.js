const { connectToDatabase, disconnectFromDatabase } = require("./pool");

async function getDepartments() {
  const conection = await connectToDatabase();

  const query = await conection.query("SELECT * FROM departments");

  await disconnectFromDatabase(conection);

  return query.rows;
}

async function getRoles() {
  const conection = await connectToDatabase();

  const query = await conection.query("SELECT * FROM roles");

  await disconnectFromDatabase(conection);

  return query.rows;
}

async function getEmployees() {
  const conection = await connectToDatabase();

  const query = await conection.query("SELECT * FROM employees");

  await disconnectFromDatabase(conection);

  return query.rows;
}

async function addDepartment(name) {
  const conection = await connectToDatabase();

  const query = await conection.query(
    `INSERT INTO departments (name) VALUES ($1)`,
    [name]
  );

  await disconnectFromDatabase(conection);

  return query.rows;
}

async function addRole(title, salary, departmentId) {
  const conection = await connectToDatabase();

  const query = await conection.query(
    `INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`,
    [title, salary, departmentId]
  );

  await disconnectFromDatabase(conection);

  return query.rows;
}

async function addEmployee(firstName, lastName, roleId, managerId) {
  const conection = await connectToDatabase();

  const query = await conection.query(
    `INSERT INTO roles (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`,
    [firstName, lastName, roleId, managerId]
  );

  await disconnectFromDatabase(conection);

  return query.rows;
}

async function updateEmployeeRole(employeeId, roleId) {
  const conection = await connectToDatabase();

  const query = await conection.query(
    `UPDATE employees SET role_id = $1 WHERE id = $2`,
    [roleId, employeeId]
  );

  await disconnectFromDatabase(conection);

  return query.rows;
}

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
