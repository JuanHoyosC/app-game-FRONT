import React from 'react'
import './tiendaItem.css';

export const TiendaItem = ({precio, imagen}) => {
    return (
        <div className="col-4 px-2 col-sm-4 mb-3 col-md-3 col-lg-2 item-tienda">
            <div className="card text-center">
                <div className="card-body item-body text-center">
                        <img src={ imagen } alt=""/>
                </div>
                <div className="card-footer item-footer d-flex justify-content-center align-items-center text-muted">
                    <img src="https://i.ibb.co/Yh22kyR/Coin.png" className="icon-coin me-2" alt="icon-coin"/> {precio}
                </div>
            </div>
        </div>
    )
}
