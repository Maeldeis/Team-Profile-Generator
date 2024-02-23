const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const {
    promptManager,
    promptAddTeamMembers,
    promptEngineer,
    promptInern } = require("./utils/prompts.js");
  const render = require("./src/page-template.js");
  const teamMembers = [];


