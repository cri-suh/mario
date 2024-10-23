const form = document.querySelector('.formulario-fale-conosco');
const mascara = document.querySelector('.mascara-formulario')

function formularioContato() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    mascara.style.visibility = 'visible'
}

mascara.addEventListener('click', fecharForm)
function fecharForm() {
    mascara.style.visibility = 'hidden'
    form.style.left = '-300px'
    form.style.transform = 'translateX(0)'

}