import './bootstrap';
import '~resources/scss/app.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// gestione immagini build
import.meta.glob([
    '../img/**'
])


const imageInput = document.getElementById('image');

imageInput.addEventListener('change', (e)=>{
    const fileWrapper = document.querySelector('#file-wrapper');
    fileWrapper.classList.remove('d-none');
    fileWrapper.classList.add('d-block');
    const src = URL.createObjectURL(e.target.files[0]);
    const image = fileWrapper.firstElementChild;
    image.src = src;
})
