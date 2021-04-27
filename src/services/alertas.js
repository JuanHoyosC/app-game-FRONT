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


export const alertaWait = ( mensaje ) => {
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

export const alertaWarning = ( mensaje ) => {
    Swal.fire({
        imageUrl: 'https://i.ibb.co/zSVp12J/1200px-Antu-dialog-warning-svg-1.png',
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

export const alertaError = ( mensaje ) => {
    Swal.fire({
        imageUrl: 'https://i.ibb.co/421DbHy/cdb14b1f2ec4963f3b9801487757363a.gif',
        imageHeight: 200,
        imageWidth: 200,
        text: mensaje,
        padding: '1em',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 4000,
        background: '#EB3E46',
        backdrop: `rgba(0,0,0,0.1)`
    })
}

export const alertaFeliz = () => {

}

export const alertaTriste = () => {
    
}