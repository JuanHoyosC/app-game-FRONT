import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useItem } from '../../hooks/useItem';
import './tiendaItem.css';

export const TiendaItem = ({precio, imagen, diamantes = false, item, cantidad}) => {

    const usuario = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const [handleComprar] = useItem(usuario, item, precio, diamantes, cantidad, dispatch);

    return (
        <div className="col-4 px-2 col-sm-4 mb-3 col-md-3 col-lg-2 item-tienda">
            <div className="card text-center" onClick={ handleComprar }>
                <div className="card-body item-body text-center">
                        <img src={ imagen } alt="item"/>
                </div>
                <div className="card-footer item-footer d-flex justify-content-center align-items-center text-muted">
                    <img src={`${diamantes ? 'https://i.ibb.co/GWvsX5Q/Diamond-2.png': 'https://i.ibb.co/Yh22kyR/Coin.png'}`} className="icon-coin me-2" alt="icon-coin"/> {precio}
                </div>
            </div>
        </div>
    )
}
