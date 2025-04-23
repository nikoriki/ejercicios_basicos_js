const placesToTravel = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}
  ];
  
  function removePlaces(places) {
    for (let i = 0; i < places.length; i++) {
      if (places[i].id === 11 || places[i].id === 40) {
        places.splice(i, 1);
        i--;
      }
    }
    console.log(places);
  }
  
  // Ejemplo de uso:
  removePlaces(placesToTravel);
  // Output:
  // [ { id: 5, name: 'Japan' },
  //   { id: 23, name: 'Murcia' },
  //   { id: 44, name: 'Filipinas' },
  //   { id: 59, name: 'Madagascar' } ]
  