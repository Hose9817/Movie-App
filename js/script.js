const numberOfFilms = +prompt('How much films do you watch?', '0');
// console.log(numberOfFilms);

const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Your last watching film?', ''),
      b = +prompt('Rating of last film?', '0'),
      c = prompt('Your last watching film?', ''),
      d = +prompt('Rating of last film?', '0');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; 
console.log(personalMovieDB);