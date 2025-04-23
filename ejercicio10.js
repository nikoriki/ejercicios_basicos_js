const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let total = 0;
  for (let number of numberList) {
    total += number;
  }
  return total / numberList.length;
}

// Ejemplo de prueba
console.log(average(numbers)); // Debería mostrar 23.428571428571427
