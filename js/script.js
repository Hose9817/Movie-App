'use strict';

// const genresList = ['drama', 'comedy', 'triller', 'horror'];

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How much films do you watch?', '');

        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How much films do you watch?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Your last watching film?', ''),
                b = +prompt('Rating of last film?', '0');
            if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done loop');
            } else {
                console.log('error loop');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You dont watching many movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic viewer');
        } else if (personalMovieDB.count > 30) {
            console.log('You are a real film fan!');
        } else {
            console.log('Error');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Your favorite film genres is?`).toLowerCase();
            if (genres === '' || genres === null) {
                console.log('Yoy messed up, asshole!');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ').sort();
            }
        }
        personalMovieDB.genres.forEach((el, i) => {
            console.log(`Your favorite genres ${i+1} is ${el}`);
        });
    }

};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();
