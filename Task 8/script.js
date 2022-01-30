/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator (x, y) {
    this.x = x;
    this.y = y;
    this.sum = function () {
        return x + y;
    };
    this.subtraction = function () {
        return x- y;
    };
    this.multiplication = function () {
        return x * y;
    };
    this.division = function () {
        return x / y;
    };
}

const kintamieji = new Calculator(10, 1);

console.log(kintamieji.sum())