import React from 'react'

export const HabitosHeader = () => {
    return (
        <div className="d-flex mb-4 justify-content-between align-items-center habitos-header">
            <button className="btn btn-modal text-white" data-bs-toggle="modal" data-bs-target="#modalCrearHabito">Crear habitos</button>
            <button className="btn btn-filter d-flex align-items-center text-white" data-bs-toggle="modal" data-bs-target="#modalFiltro">
                <i className="fas fa-filter text-white" ></i>
            </button>
        </div>
    )
}
