const a = [1, 2, 3];
const b = [1, 2, 3, 4, 5];

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

export const trinomioCuadrado = () => {

    const ladoA = a[random(0, 2)];
    const ladoB = b[random(0, 4)];

    return `${ladoA * ladoA}+${2 * ladoA * ladoB}+${ladoB * ladoB}`
}
