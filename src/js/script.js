'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const oneFilm = prompt('Один из последних просмотренных фильмов?');
const number = prompt('На сколько вы его оцените?');
const twoFilm = prompt('Один из последних просмотренных фильмов?');
const numberTwo = prompt('На сколько вы его оцените?');

personalMovieDB.movies[oneFilm] = number;
personalMovieDB.movies[twoFilm] = numberTwo;


console.log(personalMovieDB);
