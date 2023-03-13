const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

/*
//CODING CHALLENGE #4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, sec] = row.toLowerCase().trim().split("_");
    const output = `${first}${sec.replace(sec[0], sec[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${"✔".repeat(i + 1)}`);
  }
});
*/

/*
//CODING CHALLENGE #3
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
const avg = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avg} minutes.`);

for (const [k, v] of gameEvents.entries()) {
  if (k < 45) console.log(`[FIRST HALF] ${k}: ${v}`);
  else console.log(`[SECOND HALF] ${k}: ${v}`);
}
*/

/*
//CODING CHALLENGE #2
for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

let sum = 0;
for (const x of Object.values(game.odds)) {
  sum += x;
}

const avg = sum / Object.values(game.odds).length;
console.log(avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

/*
//CODING CHALLENGE #1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "thiago", "coutinho", "perisic"];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win.");
team1 > team2 && console.log("Team 2 is more likely to win.");
*/
