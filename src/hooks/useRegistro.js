import { useState } from 'react'

export const useRegistro = ({ form }) => {


    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(form)
        fetch('http://localhost:4000/register', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(form) })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
            })
    }



    return [handleSubmit, loading];

}
