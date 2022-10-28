const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const express = require("express");
const path = require("path");
const axios = require("axios");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
let pdf = require("html-pdf");

let options = {
  format: "Letter"
};

//Module Imports
const generateHTML = require("output/generateHTML.js");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
//==================================
// sets up express app
const app = express();
const PORT = process.env.PORT || 3000;

//allows express app to handle data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
//===================================


//Employees DATA
const employees = [];
const engineers = [];
const interns = [];
const managers = [];
let id = 0;
let response;

const userPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Name:",
        name: "name"
      },
      {
        type: "input",
        message: "Email:",
        name: "email"
      },
      {
        type: "list",
        name: "role",
        message: "What's Your Position?",
        choices: ["Manager", "Engineer", "Intern"]
      }
    ])
    // Swtich statments allows the progam to evaluate the expression
    // then looks for the case clause whose value equals the same as the result of the input
    . then(function(data) {
      switch (data.role) {
        case "Manager":
          inquirer
          .prompt([
            {
              type: "input",
              message: "Enter employee ID: ",
              name: "id"
            },
            {
              type: "input",
              message: "Enter office number: ",
              name: "office"
            }
          ])
          .then(function(res) {
            const officeNum = res.office;
            console.log(officeNum);
            const manager = new Manager(
              data.name,
              res.id,
              data.email,
              officeNum,
              "Manager"
            );
            console.log(manager);
            employees.push(manager);})
            .then(function(){
              addNext()
              });
          break;
        case "Engineer":
           inquirer
            .prompt([
              {
                type: "input",
                message: "Enter employee ID: ",
                name: "id"
              },
              {
                type: "input",
                message: "Enter github username: ",
                name: "github"
              }
            ])
            .then(function(res) {
              const githubName = res.github;
              const engineer = new Engineer(
                data.name,
                res.id,
                data.email,
                githubName,
                "Engineer"
              );
              employees.push(engineer);
            }).then(function(){
              addNext()
              });
              break;
              case "Intern":
                 inquirer
                  .prompt([
                    {
                      type: "input",
                      message: "Enter employee ID: ",
                      name: "id"
                    },
                    {
                      type: "input",
                      message: "Enter school: ",
                      name: "school"
                    }
                  ])
                  .then(function(res) {
                    const internSchool = res.school;
                    const intern = new Intern(
                      data.name,
                      res.id,
                      data.email,
                      internSchool,
                      "Intern"
                    );
                    employees.push(intern);
                  }).then(function(){
                    addNext()
                    });
                break;
            }
          })
          .then(function() {
          });
      };
