
  const init = async () => {
    try {
        const managerData = await promptManager();
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        teamMembers.push(manager);
        let addMoreTeamMembers = true;
        while (addMoreTeamMembers) {
          const { addTeamMembers } = await promptAddTeamMembers();
          if (addTeamMembers === "Engineer") {
            const engineerData = await promptEngineer();
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            teamMembers.push(engineer);
        } else if (addTeamMembers === "Intern") {
            const internData = await promptInern();
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
            teamMembers.push(intern);
          } else {
            addMoreTeamMembers = false;
          }
        }
        const html = render(teamMembers);
        fs.writeFileSync(outputPath, html);
        console.log(`Team profile generated at ./output/team.html`);
      } catch (error) {
        console.error(error);
      }
    }
    init();
    
    
    
    

