'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const oneFilm = prompt('Один из последних просмотренных фильмов?'),
    number = prompt('На сколько вы его оцените?'),
    twoFilm = prompt('Один из последних просмотренных фильмов?'),
    numberTwo = prompt('На сколько вы его оцените?');

personalMovieDB.movies[oneFilm] = number;
personalMovieDB.movies[twoFilm] = numberTwo;

personalMovieDB.genres[0] = prompt('Какой жанр любишь?');
personalMovieDB.genres[1] = prompt('Какой второй жанр любишь?');


console.log(personalMovieDB);
