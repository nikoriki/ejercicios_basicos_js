const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

function showAlienData(alien) {
  for (const property in alien) {
    console.log(`La propiedad ${property} tiene cómo valor: ${alien[property]}`);
  }
}

// Ejemplo de uso:
showAlienData(alien);
// Output:
// La propiedad name tiene cómo valor: Xenomorph
// La propiedad species tiene cómo valor: Xenomorph XX121
// La propiedad origin tiene cómo valor: Unknown
// La propiedad weight tiene cómo valor: 180
