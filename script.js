const button = document.querySelector('button')
const container = document.querySelector('#container')

button.addEventListener('click',()=>{
    container.innerHTML = '<div id="kermit"><img src="./tenor.gif" width="100%"><img src="./none.gif" width="100%"></div><a id = "redirect" href="https://www.wikihow.life/Advertise-a-Marijuana-Business-Online"></a>'
    setTimeout(() => {
        const redirect = document.querySelector('#redirect')
    }, 3000);
})
