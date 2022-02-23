// dati
let areaContainBoxes = document.querySelector('.area-boxes')

// input
for (let i = 1; i <= 100; i++) {
    if (i% 15 == 0) {
        areaContainBoxes.innerHTML += `<div class="box orange">BuzFizz</div>`
    } else if (i% 3 == 0){
        areaContainBoxes.innerHTML += `<div class="box yellow">Buz</div>`
    } else if (i% 5 == 0) {
        areaContainBoxes.innerHTML += `<div class="box pink">Fizz</div>`    
    } 
    
    else{
        areaContainBoxes.innerHTML += `<div class="box">${i}</div>`
    }
}
    

// output