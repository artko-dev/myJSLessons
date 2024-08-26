"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('How many movies did you watched?', '').trim();
   while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
      numberOfFilms = +prompt('How many movies did you watched?', '');
   }
}
start();

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Witch movie did you watch last time?', '').trim(),
            b = prompt('How many stars you can set for that movie?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

rememberMyFilms();

function favoriteGenres(number) {
   for (let i = 1; i <= 3 ; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Your favorite genres ${i}`);
   }
}

favoriteGenres();

function detectPersonalLevel() {
   if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
      alert(`It's to less movies`);
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert(`You are cool watcher`);
   } else if (personalMovieDB.count >= 30) {
      alert(`You are movigolick`);
   } else {
      alert(`Something was wrong`);
   }
}

detectPersonalLevel();

function privatCheck(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   } else {
      console.log(`Sorry it's private DB`);
   }
}

privatCheck(personalMovieDB.privat);

//console.log(personalMovieDB);