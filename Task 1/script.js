/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


document.addEventListener('submit', function (event) {
    event.preventDefault();
    const formInputs = event.target.elements;
    const svoris = formInputs.search.value;
    const output = document.querySelector('#output');
    output.innerHTML = `Pounds: ${svoris * 2.2046} <br> Grams: ${svoris / 0.0010000}<br> Ounces: ${svoris * 35.274}`;
});
    output.style.margin= '0 10rem';
    output.style.font = '2.5rem';
