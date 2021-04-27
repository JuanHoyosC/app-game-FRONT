
export const getPuntaje = (puntaje) => {
    if(puntaje === 1) return 'Sencillo';
    if(puntaje === 2) return 'Fácil';
    if(puntaje === 3) return 'Mediano';
    if(puntaje === 4) return 'Díficil';

    return 'Sencillo';
}
