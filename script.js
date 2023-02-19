let table = prompt('Number of your table:', 'Table #1');
let drink = prompt('Will you order tea or coffee?', 'Tea');
let payment = prompt('Will you pay in cash or by credit card?', 'Cash');
alert(table + drink + payment);

let number = 37095;
let e = number % 10;
let d = Math.trunc(number % 100 / 10);
let c = Math.trunc(number % 1000 / 100);
let b = Math.trunc(number % 10000 / 1000);
let a = Math.trunc(number % 100000 / 10000);
console.log(`${a} ${b} ${c} ${d} ${e}`);


// еще одно решение п.2
let num1 = 94027;
let num2 = Array.from(String(num1));
console.log(`${num2[0]} ${num2[1]} ${num2[2]} ${num2[3]} ${num2[4]}`);


