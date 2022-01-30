/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', getExternalJSON);

function getExternalJSON () {
    fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => {
        outputExternalData(data);
    })
    .catch((error) => console.log(error));
}
function outputExternalData(data) {
    let output = '';
    data.forEach(user => {
        output += `<li>${user.login}, ${user.avatar_url}</li>`;
    });
    document.querySelector('#output').innerHTML = output;
    output.style.margin = '50px';
    output.style.text = '2em';
}
