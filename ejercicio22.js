const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function replaceNonVeganFoods(foodSchedule, fruits) {
  let fruitIndex = 0;
  for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
      foodSchedule[i].name = fruits[fruitIndex];
      fruitIndex++;
      if (fruitIndex === fruits.length) {
        fruitIndex = 0;
      }
    }
  }

  console.log(foodSchedule);
}

// Ejemplo de uso:
replaceNonVeganFoods(foodSchedule, fruits);
// Output:
// [
//   { name: "Heura", isVegan: true },
//   { name: "Strawberry", isVegan: false },
//   { name: "Tofu", isVegan: true },
//   { name: "Banana", isVegan: false },
//   { name: "Rice", isVegan: true },
//   { name: "Orange", isVegan: true },
// ]
