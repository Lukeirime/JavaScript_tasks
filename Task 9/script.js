/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie  {
    constructor (title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = function () {
        if (this.budget>100000000) {
        return true;
        } else {
        return false;
    }}
}};
const harryPotterThirdMovie = new Movie ("Harry Potter and the Prisoner of Azkaban", "Alfonso Cuarón", 130000000);

console.log(harryPotterThirdMovie.wasExpensive());
