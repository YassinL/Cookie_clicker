import { data } from '../data/Data.mjs';
import { entierAleatoire } from '../Dom/_dom.bakery.mjs'
import { Bakery } from '../classes/_classes.bakery.mjs'
import { updateBakery } from '../Dom/_dom.bakery.mjs'
import { Buildings } from '../classes/_classes.buildings.mjs'

let sectionBuilding = document.getElementById('buildings');
console.log(sectionBuilding)

// CREATION DES TUILES DU STORE 
export const updateTuiles = () => {
    // document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < data.length; i++) {
        let divBuilding = document.createElement('div');
        divBuilding.id = `building-${data[i].name.toLowerCase()}`;
        divBuilding.classList = 'locked disabled';
        sectionBuilding.appendChild(divBuilding);

        let divIcon = document.createElement('div');
        divIcon.classList = 'icon';
        divBuilding.appendChild(divIcon);

        let divBox = document.createElement('div');
        divBox.classList = 'box';
        divBuilding.appendChild(divBox);

        let divName = document.createElement('div');
        divName.classList = 'name';
        divName.innerHTML = `${data[i].name}`;
        divBox.appendChild(divName);

        let divCost = document.createElement('div');
        divCost.classList = 'cost';
        divCost.innerHTML = `${data[i].cost}`;
        divBox.appendChild(divCost);

        let divNumber = document.createElement('div');
        divNumber.classList = 'number';
        divBuilding.appendChild(divNumber);

        if (i < data.length - 3) {
            divBuilding.style.display = 'flex'
        } else {
            divBuilding.style.display = 'none'
        }

    }
    // })

}



export const deblocTuile = (monObjet) => {
    for (let i = 0; i < data.length; i++) {
        if (monObjet._cookies >= data[i].cost) {
            let tuile = document.getElementById(`building-${data[i].name.toLowerCase()}`)
            let tuileAfter = document.getElementById(`building-${data[i+1].name.toLowerCase()}`)
            let tuileAfter2 = document.getElementById(`building-${data[i+2].name.toLowerCase()}`)
            tuileAfter2.style.display = 'flex'

            tuile.classList.remove('disabled')
            tuile.classList.add('enabled')

            tuile.classList.remove('locked')
            tuile.classList.add('unlocked')

            tuileAfter.classList.remove('locked')
            tuileAfter.classList.add('unlocked')

        }
    }
}


export const buyTuiles = (monObjet) => {

    const divMere = document.getElementById('buildings').childNodes

    divMere.forEach(tuile => tuile.addEventListener('click', () => {
        let tuileName = tuile.childNodes[1].childNodes[0];
        let tuileCost = tuile.childNodes[1].childNodes[1]
        let tuileNumber = tuile.childNodes[2]

        monObjet.cost = tuileCost.innerHTML
        monObjet.number = tuileNumber.innerHTML

        monObjet.buy()

        tuileCost.innerHTML = monObjet.cost
        tuileNumber.innerHTML = monObjet.number

        // Créer une balise "audio"
        let audio = document.createElement('audio');
        tuile.appendChild(audio);

        // Aouter du texte 
        audio.src = `/assets/sounds/buy${entierAleatoire(1, 4)}.mp3`
        audio.play();
        audio.addEventListener('ended', () => {
            tuile.removeChild(audio);
        })

    }));


}

// for (let i = 0; i < data.length; i++) {
//     if (monObjet.cookies >= monObjet.cost) {
//         monObjet.cookies

//         monObjet.cost = tuileCost.innerHTML
//         monObjet.number = tuileNumber.innerHTML

//         console.log(monObjet.cost)
//         monObjet.buyBuilding(tuileName.innerHTML)

//         tuileCost.innerHTML = monObjet.cost
//         tuileNumber.innerHTML = monObjet.number

//     }
// }

// for (let i = 0; i < data.length; i++) {
//     if (monObjet.cookies >= monObjet.buildings[i].cost) {

//         monObjet.cookies -= monObjet.buildings[i].cost
//         console.log(monObjet.cookies)
//         monObjet.cost = tuileCost.innerHTML
//         monObjet.number = tuileNumber.innerHTML
//         monObjet.buyBuilding(tuileName.innerHTML)

//         tuileCost.innerHTML = monObjet.cost
//         tuileNumber.innerHTML = monObjet.number

//     }
// }