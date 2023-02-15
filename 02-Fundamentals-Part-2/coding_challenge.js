//CODING CHALLENGE #1
/*
const calcAv = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolp = calcAv(85, 54, 41);
const koala = calcAv(23, 34, 27);
console.log(dolp, koala);

function checkWinner(avko, avdo) {
    if (avko >= 2 * avdo) {
        console.log(`Koalas win (${avko} vs. ${avdo})`);
    }
    else if (avdo >= 2 * avko) {
        console.log(`Dolphins win (${avdo} vs. ${avko})`);
    }
    else {
        console.log("No team wins");
    }
}

checkWinner(koala, dolp);
checkWinner(576, 111);
*/

//CODING CHALLENGE #2
/*
function calcTip(bill) {
    let tip;
    if (bill <= 300 && bill >= 50) {
        tip = bill * 15 / 100;
    }
    else {
        tip = bill * 20 / 100;
    }
    return tip;
}

const bills = [125, 555, 44];
let tips = [];
let total = [];

tips[0] = calcTip(bills[0]);
tips[1] = calcTip(bills[1]);
tips[2] = calcTip(bills[2]);

total[0] = tips[0] + bills[0];
total[1] = tips[1] + bills[1];
total[2] = tips[2] + bills[2];

console.log(bills);
console.log(tips);
console.log(total);
*/

//CODING CHALLENGE #3
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
} else {
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
}
*/

//CODING CHALLENGE #4
function calcTip(bill) {
    let tip;
    if (bill <= 300 && bill >= 50) {
        tip = bill * 15 / 100;
    }
    else {
        tip = bill * 20 / 100;
    }
    return tip;
}

function calcAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAvg(bills));
console.log(calcAvg(tips));
console.log(calcAvg(totals));


