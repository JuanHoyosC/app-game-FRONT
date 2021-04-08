import { useEffect, useState } from "react";

export const useGetHabitos = (id) => {

    const [habitosInit, setHabitos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/gethabits/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.continuar) setHabitos(data.habitos);
            });

    }, [id]);

    return [habitosInit];
}
