const form = document.querySelector('.submit-form')
const clear = document.querySelector('.clear')
const hexinp = document.querySelector('#hexinp')
const rgb1 = document.querySelector('#rgb1')
const rgb2 = document.querySelector('#rgb2')
const rgb3 = document.querySelector('#rgb3')
const rgb = document.querySelector('.rgb')
const header = document.querySelector('.header')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const rgbArr = [rgb1,rgb2,rgb3]
    const hexVal = hexinp.value
    hexValArr = [hexVal[0] + hexVal[1], hexVal[2] + hexVal[3], hexVal[4] + hexVal[5]]
    for(let i=0;i<3;i++) {
        rgbArr[i].textContent = hexToDec(hexValArr[i])
    }
    header.style.backgroundColor = `#${hexVal}`
    rgb.style.backgroundColor = `#${hexVal}`
})

clear.addEventListener('click', (e) => {
    e.preventDefault()
    header.style.backgroundColor = '#888888'
    rgb.style.backgroundColor = 'red'
    hexinp.value = ''
    rgb1.textContent = 'GET'
    rgb2.textContent = 'RGB'
    rgb3.textContent = 'VAL'
})


function hexToDec(strr) {
    return parseInt(strr,16)
}