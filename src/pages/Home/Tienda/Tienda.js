import React, { useEffect, useState } from 'react'
import { Perfil } from '../../../components/Perfil/Perfil'
import { TiendaItem } from '../../../components/Tienda/TiendaItem'
import { getItems } from '../../../services/getItems';

export const Tienda = () => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getItems().then(items => setItems(items));
    }, [])

    return (
        <div className="row">
            <Perfil />
            {items.map(({ costo, imagen, diamantes, item, cantidad }, index) => <TiendaItem  precio={costo} imagen={imagen} diamantes={ diamantes } item={ item } cantidad={ cantidad } key={index} />)}
        </div>
    )
}
