export const getHabitos = ( id ) => {
    fetch(`http://localhost:4000/${ id }`)
        .then(res => res.json())
        .then(data => console.log(data))
}
