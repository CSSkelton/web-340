/**
 * Author: Cody Skelton
 * Date: 11.05.2023
 * Program purpose is to gain familiarity with local Node modules
 */

var teamManager = require('./team-manager.js');

teams = teamManager.getTeams();

function displayAll() {
    for (let i = 0; i<teams.length; i++) {
        console.log('\n' + teamManager.displayTeam(teams[i]) + '\n');
    }
}

console.log('-- DISPLAYING TEAMS --');
displayAll();
console.log('\n-- DISPLAYING A SINGLE TEAM --');
console.log(teamManager.displayTeam(teamManager.getTeam('University of Kentucky')));
console.log('\n-- DISPLAYING A SINGLE TEAM --');
console.log(teamManager.displayTeam(teamManager.getTeam('Michigan State')));
