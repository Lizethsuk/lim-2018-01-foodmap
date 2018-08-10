const choosetypeRest = document.getElementById('restSelect');
const listRest = document.getElementById('listRest');
const nameModal = document.getElementById('restaurant');
const listClass = document.querySelector('.listClass');
const idModal = document.getElementById('idModal');
const contModal = document.getElementById('contModal');
const areaRest = document.getElementById('areaRest');



fetch('../data/restaurant.json')
    .then(response => response.json())
    .then(restaurants => {
        restaurants.forEach(objectRest => {
            const nameRest = objectRest.name;
            const divRest = document.createElement('input');
            divRest.setAttribute('type', 'button');
            divRest.setAttribute('class', 'listClass');
            divRest.setAttribute('id', nameRest);
            divRest.setAttribute('value', nameRest);
            const salto = document.createElement('br');
            areaRest.appendChild(salto);
            areaRest.appendChild(divRest);
            areaRest.appendChild(salto);
        })
    })
choosetypeRest.addEventListener('change', () => {
    areaRest.innerHTML = '';
    fetch('../data/restaurant.json')
        .then(response => response.json())
        .then(restaurants => {
            const arrRest = restaurants.filter((ele) => {
                return (ele.type === choosetypeRest.value)
            });
            arrRest.forEach(objectRest => {
                const nameRest = objectRest.name;
                const divRest = document.createElement('input');
                divRest.setAttribute('type', 'button');
                divRest.setAttribute('class', 'listClass');
                divRest.setAttribute('id', nameRest);
                divRest.setAttribute('value', nameRest);
                const salto = document.createElement('br');

                divRest.onclick = () => {
                    idModal.style.display = 'block';
                    imprimModal(nameRest)
                }
                areaRest.appendChild(salto);
                areaRest.appendChild(divRest);
                areaRest.appendChild(salto);

            })
        })
});

const imprimModal = (nameRest) => {
    fetch('../data/restaurant.json')
        .then(response => response.json())
        .then(restaurants => {
            const arrRest = restaurants.filter((ele) => {
                return (ele.type === choosetypeRest.value)
            });
            arrRest.forEach(objectRest => {
                const nameRest = objectRest.name;
                const typeRest = objectRest.type;
                const vicinityRest = objectRest.vicinity;
                const starRest = objectRest.stars;
                contModal.innerHTML = `<h2>${nameRest}</h2>
                                            
                                       <p>${typeRest}</p>
                                            
                                       <p>${vicinityRest}</p>
                                            
                                       <p>${starRest}★</p>`;
            })

        })
}

