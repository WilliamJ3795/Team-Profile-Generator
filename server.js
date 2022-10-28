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