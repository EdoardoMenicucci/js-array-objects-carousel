
let sezioneImmagini = document.getElementById('img-section');

let sezioneMiniature = document.getElementById('under-miniature');

let nuovoImg;

let immaginiArray = [];

let miniatureArray = [];

let imgAttiva;

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
        immaginiArray.forEach(function (now, x) {
            now.className = 'hidden'
        })
        miniatureArray.forEach(function (now, x) {
            now.className = 'dark little'

        })

        if (this.id == imgs[index].numero) {
            document.getElementById(`x${this.id}`).className = "relative";
            document.getElementById(this.id).className = 'little'
            console.log(this.id, imgs[index].numero)
            imgAttiva = this.id
        }
    });
})

// document.getElementById(`x${imgAttiva}`).className = "relative";
// document.getElementById(imgAttiva).className = 'little';

let button = document.getElementById('btn');

button.addEventListener('click', function () {
    setInterval(function () {
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
// CAMBIO IMMAGINE DOPO 15S


// FUNZIONE AL CLICK SULLA MINIATURA
// function miniaturaFunction() {
//     for (let i = 0; i < imgs.length; i++) {

//         if (this.id == imgs[i].numero) {
//             nuovoImg[index].className = 'x';
//         }
//     }
// }


// if (element.index == this.id) {
//     document.getElementById(index).className = ""
// } else {
//     document.getElementById(index).className - '';
// }










//     // AGGIUNGO ALLA MINIATURA TUTTE LE IMG CLICCABILI
//     let aggiuntaMiniature = `<div class="little">../img/${imgnow}</div>`;
//     aggiuntaMiniature.addEventListener(`click`, function () {
//         // FUNZIONE PER AGGIUNGERE IL CAMBIO IMG

//     })
//     sezioneMiniature.innerHTML += `<div class="little">../img/${imgnow}</div>`;
// })