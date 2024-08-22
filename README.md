# **SQL Challenge: Employee Tracker**

## **About the Project**

### **Overview**

This project is a command-line application designed to manage a company's employee database using Node.js, Inquirer, and PostgreSQL. The application allows business owners to efficiently view and manage departments, roles, and employees, ensuring that the company's organization and planning processes are streamlined.

The application is not deployed; instead, a walkthrough video demonstrates its functionality, covering all the acceptance criteria. This video should be included in the README of the project.

Find the repository [here](https://github.com/AlejnadroVill/Employee-Tracker).

## **Table of Contents**

- [Get Started](#get-started)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)

## **Get Started**

To get started with this project, follow these steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/AlejnadroVill/Employee-Tracker
   ```
2. Navigate to the Project Directory:
   cd Employee-Tracker
3. Install Dependencies:
   npm install
4. Navigate to the db directory:
   psql -U postgres
   psql \i schema.sql
   psql \i seeds.sql
5. Run the Application:
   node server.js

This will start the application. You can then interact with terminal.

## **Usage**

Once the application is running, you can:

- **View All Departments:** See a formatted table displaying department names and IDs.
- **View All Roles:** View job titles, role IDs, associated departments, and salaries.
- **View All Employees:** Access a formatted table showing employee data, including IDs, names, job titles, departments, salaries, and managers.
- **Add a Department:** Prompt to enter and add a new department to the database.
- **Add a Role:** Prompt to enter the name, salary, and department for a new role, then add it to the database.
- **Add an Employee:** Prompt to enter the employee’s name, role, and manager, then add them to the database.
- **Update an Employee Role:** Select an employee and update their role information in the database.

## **License**

See the [LICENSE](https://github.com/AlejnadroVill/SQL-Challenge-Employee-Tracker/blob/main/LICENSE) for more details.

## **Credits**

This project was developed by [AlejnadroVill](https://github.com/AlejnadroVill) as part of the SQL challenge.
