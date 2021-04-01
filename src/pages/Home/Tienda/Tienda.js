import React from 'react'
import { TiendaItem } from '../../../components/Tienda/TiendaItem'

export const Tienda = () => {
    const items = [{img:'https://image.flaticon.com/icons/png/512/129/129094.png', precio: 10}, 
                    {img:'https://images.vexels.com/media/users/3/212021/isolated/preview/10076cab6020fcad54c592246b148a3b-botella-de-poci-oacute-n-de-mago-c-oacute-nica-plana-by-vexels.png', precio: 50}, 
                    {img:'https://img.icons8.com/color/452/treasure-chest.png', precio: 70},
                    {img:'https://img.icons8.com/color/452/treasure-chest.png', precio: 20}, 
                    {img:'https://image.flaticon.com/icons/png/512/129/129094.png', precio: 10},
                    {img:'https://cdn2.iconfinder.com/data/icons/video-game-color-line/48/video_game_pixel_perfect_color_line_icons_7-life-up-512.png', precio: 80}]
    return (
        <div className="row">
            {items.map(({precio, img}, index) => <TiendaItem precio={ precio } imagen={ img } key={ index } />)}
        </div>
    )
}
