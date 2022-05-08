const numberOfFilms = +prompt('How much films do you watch?', '0');
// console.log(numberOfFilms);

const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i <= 1; i++){
    const a = prompt('Your last watching film?', ''),
          b = +prompt('Rating of last film?', '0');

          if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
          } else {
              console.log('error');
              i--;
          }

          if(personalMovieDB.count < 10) {
              console.log('Not good');
          } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
              console.log('It is normal');
          } else if(personalMovieDB.count > 30){
              console.log('Good!');
          } else {
              console.log('Error');
          }

          
}
 

console.log(personalMovieDB);