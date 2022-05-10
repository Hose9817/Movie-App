let numberOfFilms;
// console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt('How much films do you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films do you watch?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt('Your last watching film?', ''),
        b = +prompt('Rating of last film?', '0');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done loop');
    } else {
        console.log('error loop');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('You dont watching many movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a classic viewer');
} else if (personalMovieDB.count > 30) {
    console.log('You are a real film fan!');
} else {
    console.log('Error');
}


console.log(personalMovieDB);