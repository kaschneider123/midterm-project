/* Menu hamburguesa - abre y cierra-------------------------------*/

const btnOpen = document.getElementById('nav-open')
const btnClose = document.getElementById('nav-close')

btnOpen.addEventListener('click', ()=>{
    btnClose.classList.remove('hidden')
})

btnClose.addEventListener('click', ()=>{
    btnClose.classList.add('hidden')
})


/* Validacion del Formulario Contacto--------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    let contactForm = document.getElementById('contactForm');

    // Verificar si el elemento con id 'contactForm' existe
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {            
            if (validateForm()) {
                event.preventDefault();
            }
        });
    } 

    function validateForm() {
        console.log('hola')
        let fullName = document.getElementById('form-name').value.trim();
        let email = document.getElementById('form-email').value.trim();
        let phone = document.getElementById('form-number').value.trim();
        let message = document.getElementById('form-message').value.trim();

        // Validar campos obligatorios
        if (fullName === '' || email === '' || message === '') {
            alert('Por favor completar los campos requeridos.');
            return false;
        }

        // Validar formato de email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingresar un email valido.');
            return false;
        }

       
        // Validar nombre no igual a "Ironhack"
        if (fullName.toLowerCase() === 'ironhack') {
            alert('No puedes ser Ironhack, porque ¡yo soy Ironhack!');

            return false;
        }

        return true;
    }
});