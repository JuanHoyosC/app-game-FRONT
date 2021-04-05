import React from 'react'
import { Habito } from '../../../components/Habitos/Habito';
import { HabitosHeader } from '../../../components/Habitos/HabitosHeader';
import { Perfil } from '../../../components/Perfil/Perfil';
import './habitos.css';

export const Habitos = () => {

    const habitos = [{ titulo: 'Hacer algo', descripcion: 'Hacer algoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', id: 0 },
    { titulo: 'Hacer algo 2', descripcion: 'Hacer algo 2', id: 1 }]

    return (
            <div className="habitos">
                <Perfil />
                <HabitosHeader />
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {habitos.map(({ titulo, descripcion, id }) => <Habito titulo={titulo} descripcion={descripcion} id={id} key={id} />)}
                </div>
            </div>
    )
}
