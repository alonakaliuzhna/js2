//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных
//чисел от start до end.
//Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

//Тесты
//Объявлена функция getEvenNumbers(start, end)

function getEvenNumbers(start, end) {
  // Change code below this line
  let evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;

  // Change code above this line
}

console.log(getEvenNumbers(2, 5)); //[2, 4]
console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); //[8]
console.log(getEvenNumbers(7, 7)); //[]
//console.log(getEvenNumbers() со случайными start и end возвращает правильный массив
