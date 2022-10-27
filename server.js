const Manager = require("./modules/Manager");
const Engineer = require("./modules/Engineer");
const Intern = require("./modules/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const TEAMPROFILES_DIR = path.resolve(__dirname, "teamprofiles");
const teamprofilesPath = path.join(OUTPUT_DIR, "startup.html");

const render = require("./modules/htmlGenerate.js");

// Code to use inquirer to gather information about the  team members,
// and to create objects for each team member.
const teamMembers = [];

function start() {
  managerInq();
}

function managerInq() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the team manager?",
        },
        {
          type: "input",
          name: "id",
          message: "Team Manager's ID number:",
        },
        {
          type: "input",
          name: "email",
          message: "Team Manager's email address:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Team Manager's office number:",
        },
      ])
      .then((val) => {
        const manager = new Manager(
          val.name,
          val.id,
          val.email,
          val.officeNumber
        );
        console.table(manager);
        teamMembers.push(manager);
        addTeamMember();
      });
  }

  function addTeamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "what_type",
          message: "Add an engineer or intern to the team?",
          choices: ["Engineer", "Intern", "Not at this time"],
        },
      ])
      .then((val) => {
        if (val.what_type === "Engineer") {
          engineerInq();
        } else if (val.what_type === "Intern") {
          internInq();
        } else {
          createFile();
        }
      });
  }
  function engineerInq() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "Engineer's ID number:",
        },
        {
          type: "input",
          name: "email",
          message: "Engineer's email address:",
        },
        {
          type: "input",
          name: "github",
          message: "What is the Engineer's GitHub Username?",
        },
      ])
      .then((val) => {
        const engineer = new Engineer(val.name, val.id, val.email, val.github);
        console.table(engineer);
        teamMembers.push(engineer);
        addTeamMember();
      });
  }
  