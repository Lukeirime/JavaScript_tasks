/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


    fetch('./cars.json')
    .then((response) => response.json())
    .then((data) => {
        outputData(data);
    })
    .catch((error) => console.log(error));


function outputData(data) {
    let output = '';
    data.forEach((cars) => {
        output += `<li><b>${cars.brand}</b>: ${cars.models} </li>`;
    })
    document.querySelector('#output').innerHTML = output;
}
output.style.margin = '5rem';
output.style.textAlign = 'center';