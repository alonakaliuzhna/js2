function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  //for (let i = 0; i < order.length; i += 1) {
  //  total += order[i];
  //}

  for (const element of order) {
    total += element;
  }

  // Change code above this line
  return total;
}

//Объявлена функция calculateTotalPrice(order)
console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
console.log(calculateTotalPrice([])); // 0
//console.log(calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму
