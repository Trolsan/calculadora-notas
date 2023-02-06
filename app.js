const note1 = document.getElementById ('note1')
const note2 = document.getElementById ('note2')
const note3 = document.getElementById ('note3')

const recover = document.getElementById ('recover')
const min = document.getElementById ('min')
const win = document.getElementById ('win')

const btn = document.getElementById ('btn')
const result = document.getElementById ('result')

btn.addEventListener ("click", calculation)

function calculation () {
    let data1 = Number(note1.value)
    let data2 = Number(note2.value)
    let data3 = Number(note3.value)
    
    result.textContent =  ((data1 * 0.3) + (data2 * 0.3) + (data3 * 0.4)) / 3




}


