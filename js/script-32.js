//Напиши функцию includes(array, value),
//которая делает тоже самое, что
//и метод массива массив.includes(значение) - проверяет,
//есть ли в массиве array значение value, возвращая true если есть
// и false в противном случае.
//
//При выполнении этой задачи в теле функции includes() нельзя
// использовать метод массив.includes(значение).

function includes(array, value) {
  // Change code below this line

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
  // Change code above this line
}

//Объявлена функция includes(array, value)
console.log(includes([1, 2, 3, 4, 5], 3)); //true
console.log(includes([1, 2, 3, 4, 5], 17)); // false
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
); // true
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
); //false
console.log(includes(["apple", "plum", "pear", "orange"], "plum")); //true
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); //false
//Вызов includes() для случайного массива со случайным value возвращает верный boolean
//В функции includes используется for, return, но не метод массива includes
