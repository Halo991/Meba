// Adding players to the team section dynamically
const teamList = document.getElementById('teamList');
const players = ["Ray Johnson", "Michael Lee", "Chris Brown", "David Smith", "Kevin Clark"];

players.forEach(function(player) {
    let listItem = document.createElement('li');
    listItem.textContent = player;
    teamList.appendChild(listItem);
});