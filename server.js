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
  