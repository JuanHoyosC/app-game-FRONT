import React from 'react'
import { ReactSortable } from "react-sortablejs";
import { Ficha } from './Ficha'

export const Sortable = ({ group, list, setList}) => {

    return (
        <ReactSortable className="sortable"
            list={list} setList={setList}
            group={ group }
            animation={200}
            delayOnTouchStart={true}
            multiDrag
            swap
            delay={2}>
            {list.map((value, i) => <Ficha value={ value } setLista={setList} index={ i } key={i} />)}
        </ReactSortable>
    )
}
