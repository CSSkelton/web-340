let Team = require('./team.js');

const teams = [
    new Team("University of Michigan", "Wolverine", 51),
    new Team("Michigan State", "Spartan", 51),
    new Team("Texas A&M", "Reveille", 81),
    new Team("University of Kentucky", "Wildcat", 90),
    new Team("University of Louisville", "Cardinals", 113)
];


function getTeams() {
    return teams;
}

function getTeam(value) {
    return teams.find(({ name }) => name === value);
}

function displayTeam(team) {
    let output = "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: " + team.playerCount;
    return output;
}

module.exports = { getTeams, getTeam, displayTeam }