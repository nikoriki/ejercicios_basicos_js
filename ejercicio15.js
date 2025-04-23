const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta'];

function showCamisetas(products) {
  products.forEach(product => {
    if (product.includes('Camiseta')) {
      console.log(product);
    }
  });
}

// Ejemplo de uso:
showCamisetas(products);
// Output:
// Camiseta de Metallica
// Camiseta de Basket
// AC/DC Camiseta
