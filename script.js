const numberOfFilms = +prompt('How many movies did you watched?', '');

let personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [],
   privat: false
};

const a = prompt('Witch movie did you watch last time?', ''),
   b = prompt('How many stars you can set for that movie?', ''),
   c = prompt('Witch movie did you watch last time?', ''),
   d = prompt('How many stars you can set for that movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);