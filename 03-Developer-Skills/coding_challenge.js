//CODING CHALLENGE #1
function printForecast(temps) {
  let s = ``;
  for (let i = 0; i < temps.length; i++) {
    s += `${temps[i]} ºC in ${i + 1} days... `;
  }

  console.log(s);
}

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
