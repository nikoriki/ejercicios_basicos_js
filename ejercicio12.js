const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(list) {
    const uniqueItems = [];
    for (let item of list) {
      if (!uniqueItems.includes(item)) {
        uniqueItems.push(item);
      }
    }
    return uniqueItems;
  }
  
  // Ejemplo de uso
  console.log(removeDuplicates(duplicates));
  