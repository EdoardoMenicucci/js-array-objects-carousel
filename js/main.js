
let sezioneImmagini = document.getElementById('img-section');

let sezioneMiniature = document.getElementById('under-miniature');

let nuovoImg;

let immaginiArray = [];

let miniatureArray = [];

let imgAttiva;

// CREO UNA VAR PER RIFERIRMI AL SET INTERVARL E STOPPARLO AL CLICK SU UNA CARD
let mioIntervallo;


//array di oggetti con img e desc

let imgs = [
    { img: './img/01.webp', desc: 'SPIDERMAN', numero: 0 },
    { img: './img/02.webp', desc: 'MARIO', numero: 1 },
    { img: './img/03.webp', desc: 'PEPPE', numero: 2 },
    { img: './img/04.webp', desc: 'PIPPO', numero: 3 },
    { img: './img/05.webp', desc: 'PLUTO', numero: 4 }
]


imgs.forEach(function (imgnow, index, array) {
    // CREO MINIATURE SOTTO L'IMMAGINE PRINCIPALE
    let nuovoMin = document.createElement(`div`);
    nuovoMin.className = 'little';
    nuovoMin.innerHTML = `<img src="${imgnow.img}" alt="">`
    nuovoMin.id = `${index}`
    sezioneMiniature.append(nuovoMin)
    miniatureArray.push(nuovoMin);


    // CRE0 IMGS PRINCIPALI
    nuovoImg = document.createElement(`div`);
    nuovoImg.className = 'hidden';
    nuovoImg.id = `x${index}`
    nuovoImg.innerHTML = `<div class="absolute">${imgnow.desc}</div><img src="${imgnow.img}" alt="">`
    sezioneImmagini.append(nuovoImg)
    immaginiArray.push(nuovoImg)


    // AGGIUNGO CLICK SU MINIATURA PER CAMBIO IMG
    nuovoMin.addEventListener('click', function miniaturaFunction() {
        clearInterval(mioIntervallo);
        immaginiArray.forEach(function (now, x) {
            now.className = 'hidden'
        })
        miniatureArray.forEach(function (now, x) {
            now.className = 'dark little'

        })

        if (this.id == imgs[index].numero) {
            document.getElementById(`x${this.id}`).className = "relative";
            document.getElementById(this.id).className = 'little'
            console.log(parseInt(this.id), imgs[index].numero)
            imgAttiva = parseInt(this.id)
        }
    });
})

let button = document.getElementById('btn');

// CAMBIO IMMAGINE DOPO 15S
button.addEventListener('click', function () {

    mioIntervallo = setInterval(function () {
        if (imgAttiva < 4) {
            imgAttiva += 1
        } else {
            imgAttiva = 0
        }
        immaginiArray.forEach(function (now, x) {
            now.className = 'hidden'

        })
        miniatureArray.forEach(function (now, x) {
            now.className = 'dark little'
        })
        document.getElementById(`x${imgAttiva}`).className = "relative";
        document.getElementById(imgAttiva).className = 'little';
    }, 2000)
})
