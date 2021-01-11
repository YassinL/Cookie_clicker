import { deblocTuile } from '../Dom/_dom.tuiles.mjs';

const bakery = document.querySelector('#bakery h2')
let cookiesSotck = document.querySelector('#cookiesStock span');
const cookiesPerSecond = document.querySelector('#cookiesPerSecond span');


// Fonction qui permet de choisir un nombre aléatoire 
export function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const updateBakery = (monObjet) => {
    // document.addEventListener('DOMContentLoaded', () => {
    // AJOUT DE LA CLASSE MYBAKERY DANS LA SECTION BAKERY
    bakery.innerHTML = monObjet.name;
    cookiesSotck.innerHTML = monObjet.cookies;
    cookiesPerSecond.innerHTML = monObjet.cookiesPerSecond;
    // })
}


let clickCookie = document.getElementById('bigCookie')
    // Clique sur le cookie il rajouter +1 avec la méthode bakeCookies    
export const cookieCLicker = (monObjet) => {
    clickCookie.addEventListener('click', (event) => {
        cookiesSotck.innerHTML = monObjet.bakeCookies();;

        // Création de la div + affichage dans BigCookie
        let textCookie = document.createElement('div');
        textCookie.classList = 'textCookie';
        textCookie.innerHTML = '+1';
        clickCookie.appendChild(textCookie);
        textCookie.style.top = event.clientY + "px";
        textCookie.style.left = event.clientX + "px";

        // Créer une balise "audio"
        let audio = document.createElement('audio');
        bigCookie.appendChild(audio);

        // Aouter du texte 
        audio.src = `/assets/sounds/click${entierAleatoire(1, 7)}.mp3`
        audio.play();

        // Remove à la fin de l'animation le textCookie +1 et l'audio
        clickCookie.addEventListener('animationend', () => {
            clickCookie.removeChild(textCookie);
            bigCookie.removeChild(audio);
        })

        deblocTuile(monObjet);

    })
}