const form = document.querySelector('.submit-form')
const rgb1 = document.getElementById('rgb-1')
const rgb2 = document.getElementById('rgb-2')
const rgb3 = document.getElementById('rgb-3')
const hexC = document.getElementById('hex-container')
const header = document.querySelector('.header')
const clear = document.querySelector('.clear')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const hex = getHexValue(rgb1.value,rgb2.value,rgb3.value)
        hexC.innerText = hex
        hexC.style.backgroundColor = hex
        header.style.backgroundColor = hex
})

clear.addEventListener('click',(e) => {
    rgb1.value = ''
    rgb2.value = ''
    rgb3.value = ''
    hexC.innerText = '#HEXCOL'
    hexC.style.backgroundColor = 'red'
    header.style.backgroundColor = '#888888'
})

function getHexValue(rgb1,rgb2,rgb3) {
    let rgbArr = [rgb1,rgb2,rgb3]
    let hexCode = '#'
    for(let i=0;i<3;i++) {
        const first = Math.floor(rgbArr[i] / 16)
        const second = rgbArr[i] % 16
        hexCode += checkForHex(first)
        hexCode += checkForHex(second)
    }
    return hexCode
}

function checkForHex(first) {
    let val = ''
    if(first>=0 && first<=9) {
        val += first.toString()
    } else {
        val += String.fromCharCode(first + 55)
    }
    return val
}