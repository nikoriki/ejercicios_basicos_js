const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function nameFinder(nameList, nameToFind) {
    const index = nameList.indexOf(nameToFind);
    
    if (index !== -1) {
      return { found: true, position: index };
    } else {
      return { found: false };
    }
  }
  
  // Ejemplo de uso
  console.log(nameFinder(names, 'Tony'));
  console.log(nameFinder(names, 'John'));
  