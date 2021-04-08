export const useHabitos = ( form = {}, id = '', dispatch ) => {

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        e.stopPropagation();
        const res = await fetch('http://localhost:4000/addhabit', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...form, id_usuario: id }) })
        const data = await res.json();
        dispatch({type: 'add', payload: form});
        console.log(data)
    }

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:4000/deletehabit/${ id }`);
        const data = await res.json()
        if(!data.continuar) return;
        dispatch({type: 'delete', payload: id});
    }

    return [ handleSubmit, handleDelete ]
}
