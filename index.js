import mysql from "mysql2";
import inquirer from "inquirer";

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'employee_db'
    });


    const questions = [
        {
          type: "list",
          message: "Select your action",
          name: "start",
          choices: [
            "View all departments",
            "View all employees",
            "View all roles",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee's role",
          ]}];


          const addEmployeeQ = [
            {
                type: "input",
                message: "Enter first name of Employee",
                name: "firstname",
              },
            
            
            {
                type: "input",
                message: "Enter last name of Employee",
                name: "lastname",
              }];
          
              const addDepartmentQ = [
                {
                  type: "input",
                  message: "What would you like to name the department?",
                  name: "department",
                },
              ];

              inquire();

              function viewDepartments() {
                db.query('SELECT * FROM department', function (err, results) {
                  console.table(results)})};

                  function viewRoles() {
                        db.query('Select * FROM roles', function (err, results) {
                          console.table(results)})};
                          
                function viewEmployees() {
                    db.query("Select * FROM employee", function (err, results) {
                      console.table(results);
                      inquire()})};


    function addDepartment() {
        inquirer.prompt(addDepartmentQ).then((answer) => {
        let departmentName = {department_name: answer.department,};
                          db.promise()
                            .query("INSERT INTO department SET ?", departmentName)
                            .then(() => {
                              inquire();});
                        })};

function addEmployee() {
    inquirer
    .prompt(addEmployeeQ)
                          
    .then((answers) => {
     let firstName = answers.firstname;
    let lastName = answers.lastname;
    }).then((response) => {
    let employee = {
      first_name: firstName,
      last_name: lastName,
    
}})
    }  db.promise()
    .query("INSERT INTO employee SET ?", employee);


    function inquire() {
        inquirer.prompt(questions).then((answers) => {
          switch (answers.start) {
            case "View all departments":
              viewDepartments();
              break;
            case "View all employees":
              viewEmployees();
              break;
            case "Add a department":
              addDepartment();
              break;
              case "View all roles":
              viewRoles();
              break;
            
            case "Add a role":
              addRoles();
              break;
            case "Update an employee's role":
              updateRole();
              break;
            case "Add an employee":
              addEmployee();
              break;
            
          }
        });
      };