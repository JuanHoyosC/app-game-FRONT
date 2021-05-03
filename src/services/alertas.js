import Swal from 'sweetalert2'

export const alertas = (mensaje) => {
    Swal.fire({
        text: mensaje,
        padding: '3em',
        timerProgressBar: true,
        timer: 3000,
        background: '#4a4e52',
        backdrop: `rgba(0,0,0,0.1)`
    })
}

export const alertaSure = (mensaje) => {
    return Swal.fire({
        imageUrl: 'https://i.ibb.co/pyyTh3P/question.png',
        imageHeight: 100,
        imageWidth: 100,
        imageAlt: 'Imagen pregunta',
        title: `¿${mensaje}?`,
        text: "No podras recuperarlo!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        background: '#4a4e52',
        cancelButtonColor: '#EA3548',
        confirmButtonText: `Borrar`
    })
}


export const alertaWait = (mensaje) => {
    Swal.fire({
        imageUrl: 'https://i.ibb.co/TgynChR/clock.gif',
        imageHeight: 100,
        imageWidth: 100,
        text: mensaje,
        padding: '3em',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 4000,
        background: '#4a4e52',
        backdrop: `rgba(0,0,0,0.1)`
    })
}

export const alertaBuy= (mensaje) => {
    Swal.fire({
        imageUrl: 'https://i.ibb.co/2dMCTRm/cracker-1.png',
        imageHeight: 100,
        imageWidth: 100,
        text: mensaje,
        padding: '3em',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 4000,
        background: '#4a4e52',
        backdrop: `rgba(0,0,0,0.1)`
    })
}

export const alertaSaldo= (mensaje) => {
    Swal.fire({
        imageUrl: 'https://i.ibb.co/P6W1WmG/safebox.png',
        imageHeight: 100,
        imageWidth: 100,
        text: mensaje,
        padding: '3em',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 4000,
        background: '#4a4e52',
        backdrop: `rgba(0,0,0,0.1)`
    })
}



export const alertaVictory = (mensaje = '', nivel, dificultad) => {
    const vida = nivel * 4 * dificultad;
    const exp = nivel * 4 * dificultad;
    const img = dificultad === 4 ? 'https://i.ibb.co/GWvsX5Q/Diamond-2.png' : 'https://i.ibb.co/Yh22kyR/Coin.png';
    const cantidad = dificultad === 4?`${ 2 * dificultad + nivel } de diamantes` : `${ 4 * dificultad + nivel } de oro`
    Swal.fire({
        imageUrl: 'https://i.ibb.co/7WSY142/success.png',
        imageHeight: 100,
        imageWidth: 100,
        html: `
        <div class="d-flex justify-content-center align-items-center">
        <div class="mb-3 me-3">
            <h5 class="text-white text-center mb-4">${ mensaje }</h5>
            <small class="me-4 d-flex align-items-center text-white"><img src="https://i.ibb.co/chR5njb/Heart.png" class="img-coin" alt="img-coin" />+ ${ vida } de vida</small>
            <small class="me-4 d-flex align-items-center text-white"><img src="https://i.ibb.co/RbCsMgF/lightning.png" class="img-coin" alt="img-coin" />+ ${ exp } de experiencia</small>
            <small class="me-4 d-flex align-items-center text-white"><img src=${img} class="img-coin" alt="img-coin" />+ ${ cantidad }</small>
        </div>
        </div>
    
        <style>
            .imagen-icon img {
                width: 50px;
            }

        </style>`,
        padding: '0em',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 4000,
        background: '#4a4e52',
        backdrop: `rgba(0,0,0,0.1)`
    })
}

export const alertaWarning = (mensaje) => {
    Swal.fire({
        imageUrl: 'https://i.ibb.co/HD20KFT/warning.png',
        imageHeight: 100,
        imageWidth: 100,
        text: mensaje,
        padding: '1em',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 4000,
        background: '#4a4e52',
        backdrop: `rgba(0,0,0,0.1)`
    })
}

export const alertaError = (mensaje) => {
    Swal.fire({
        imageUrl: 'https://i.ibb.co/sH7HRs7/browser.png',
        imageHeight: 128,
        imageWidth: 128,
        text: mensaje,
        padding: '1em',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 4000,
        background: '#4a4e52',
        backdrop: `rgba(0,0,0,0.1)`
    })
}

export const alertaFeliz = () => {

}

export const alertaDefeat = (mensaje='', nivel, dificultad) => {
    const vida = nivel * 4 * dificultad;
    const exp = nivel * 4 * dificultad;
    const img = dificultad === 4 ? 'https://i.ibb.co/GWvsX5Q/Diamond-2.png' : 'https://i.ibb.co/Yh22kyR/Coin.png';
    const cantidad = dificultad === 4?`${ 2 * dificultad + nivel } de diamantes` : `${ 4 * dificultad + nivel } de oro`
    Swal.fire({
        imageUrl: 'https://i.ibb.co/c2s2NMJ/sad-1.png',
        imageHeight: 100,
        imageWidth: 100,
        html: `
        <div class="d-flex justify-content-center align-items-center">
        <div class="mb-3 me-3">
            <h5 class="text-white text-center mb-4">${ mensaje }</h5>
            <small class="me-4 d-flex align-items-center text-white"><img src="https://i.ibb.co/chR5njb/Heart.png" class="img-coin" alt="img-coin" />- ${ vida } de vida</small>
            <small class="me-4 d-flex align-items-center text-white"><img src="https://i.ibb.co/RbCsMgF/lightning.png" class="img-coin" alt="img-coin" />- ${ exp } de experiencia</small>
            <small class="me-4 d-flex align-items-center text-white"><img src=${img} class="img-coin" alt="img-coin" />- ${ cantidad }</small>
        </div>
        </div>
    
        <style>
            .imagen-icon img {
                width: 50px;
            }

        </style>`,
        padding: '0em',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 10000,
        background: '#4a4e52',
        backdrop: `rgba(0,0,0,0.1)`
    })
}