const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let total = 0;
  for (let number of numberList) {
    total += number;
  }
  return total;
}

// Ejemplo de prueba
console.log(sumNumbers(numbers)); // Debería mostrar 151
