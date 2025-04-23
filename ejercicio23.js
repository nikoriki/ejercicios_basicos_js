const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  
  function categorizeMovies(movies) {
    const smallMovies = [];
    const mediumMovies = [];
    const largeMovies = [];
  
    for (const movie of movies) {
      if (movie.durationInMinutes < 100) {
        smallMovies.push(movie);
      } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        mediumMovies.push(movie);
      } else {
        largeMovies.push(movie);
      }
    }
  
    console.log("Películas pequeñas:", smallMovies);
    console.log("Películas medianas:", mediumMovies);
    console.log("Películas grandes:", largeMovies);
  }
  
  // Ejemplo de uso:
  categorizeMovies(movies);
  // Output:
  // Películas pequeñas: [ { name: 'Spirited Away', durationInMinutes: 80 } ]
  // Películas medianas: [ { name: 'Titan A.E.', durationInMinutes: 130 },
  //                       { name: 'Inception', durationInMinutes: 165 },
  //                       { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  //                       { name: 'Terminator', durationInMinutes: 140 },
  //                       { name: 'The Matrix', durationInMinutes: 136 },
  //                       { name: 'Amélie', durationInMinutes: 110 },
  //                       { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 } ]
  // Películas grandes: [ { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  //                     { name: 'The Lord of the Rings', durationInMinutes: 967 } ]
  