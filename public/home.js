console.log('Loaded from home.hbs file')

const rgbtohex = document.getElementById('rgbtohex')
const hextorgb = document.getElementById('hextorgb')

rgbtohex.addEventListener('click',(e) => {
    e.preventDefault()
    location.assign('/rgbtohex')
})

hextorgb.addEventListener('click',(e) => {
    e.preventDefault()
    location.assign('/hextorgb')
})