const inquirer = require("inquirer");
const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter team manager's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the team manager's id",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team manager's email",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the team manager's office number",
    },
  ]);
};
exports.promptManager = promptManager;
const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's id",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's github",
    },
  ]);
};
exports.promptEngineer = promptEngineer;
const promptInern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's id",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school",
    },
  ]);
};
exports.promptInern = promptInern;
const promptAddTeamMembers = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "addTeamMembers",
      message: "Select team member to add",
      choices: ["Engineer", "Intern", "None"],
    }
  ]);
};
exports.promptAddTeamMembers = promptAddTeamMembers;