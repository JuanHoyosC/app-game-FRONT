import React from 'react'
import './tiendaItem.css';

export const TiendaItem = ({precio, imagen}) => {
    return (
        <div className="col-4 px-2 col-sm-4 mb-3 col-md-3 col-lg-2 item-tienda">
            <div className="card text-center">
                <div className="card-body item-body text-center">
                        <img src={ imagen } alt=""/>
                </div>
                <div className="card-footer item-footer text-muted">
                    <i className="fas fa-coins"></i> {precio}
                </div>
            </div>
        </div>
    )
}
