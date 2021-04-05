import React from 'react'
import { NavLink } from "react-router-dom";

export const BtnClasificatoria = () => {
    return (
        <NavLink exact activeClassName="active-btn-clasificatoria" data-bs-dismiss="offcanvas" aria-label="Close"
                    className="btn text-white btn-clasificatoria mt-3 d-flex align-items-center justify-content-center" 
                            to="/clasificatoria">
            <i className="fas me-2 fa-trophy"></i> Ver clasificatoria
        </NavLink>
    )
}
