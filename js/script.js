// DATI
let areaContainBoxes = document.querySelector('.area-boxes');

// ::::::::::::FUNZIONE CASELLE::::::::::::

// INPUT
for (let i = 1; i <= 100; i++) {
    
    if (i % 3 == 0 && i % 5 == 0) {
        areaContainBoxes.innerHTML += `<div class="box orange">BuzFizz</div>`
    } else if (i% 3 == 0){
        areaContainBoxes.innerHTML += `<div class="box yellow">Buz</div>`
    } else if (i% 5 == 0) {
        areaContainBoxes.innerHTML += `<div class="box pink">Fizz</div>`    
    } else {
        areaContainBoxes.innerHTML += `<div class="box">${i}</div>`
    }

}

// ::::::::::::EFFETTO ZOOM::::::::::::::::

let caselBox = document.querySelectorAll('.box');

for (let i = 0; i < caselBox.length ; i++) {
    caselBox[i].addEventListener('mouseover', function(){
        caselBox[i].classList.add('size');
    });
    caselBox[i].addEventListener('mouseout', function(){
        caselBox[i].classList.remove('size');
    });
}


