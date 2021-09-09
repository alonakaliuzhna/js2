//Дополни код так, чтобы в переменную number записывалось
//первое число от start до end, которое делится на 5 без остатка.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);
