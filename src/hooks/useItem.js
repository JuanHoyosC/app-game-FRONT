import Swal from 'sweetalert2'
import { alertaSaldo, alertaBuy, alertaError } from '../services/alertas';
import { types } from '../types/types';
import { URL_BACKEND } from '../URL_BACKEND';

export const useItem = (usuario, item, costo, diamantes, cantidad, dispatch) => {

    const handleComprar = async () => {

        console.log(cantidad, item)
       const token = localStorage.getItem('appToken');
       const result =  await Swal.fire({
            imageUrl: 'https://i.ibb.co/HqQjYW9/store.png',
            imageHeight: 100,
            imageWidth: 100,
            imageAlt: 'Imagen pregunta',
            title: `¿Estás seguro de comprar este item?`,
            text: `Comprarás +${cantidad} de ${item} por ${ costo } de ${ diamantes ? 'diamantes': 'oro' }`,
            showCancelButton: true,
            confirmButtonColor: '#FFDC64 !importnat',
            background: '#4a4e52',
            cancelButtonColor: '#EA3548',
            confirmButtonText: `Comprar`
        })

        if (!result.isConfirmed) return;

        const res = await fetch(`${URL_BACKEND}/comprar-item`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ _id: usuario._id, costo, cantidad, item, diamantes }) })
        const data = await res.json();
    
        if (!data.continuar) { 
            if(data.saldo){
                alertaSaldo(data.mensaje);
            }else{  
                alertaError('Hubo un error');
            }

            return ;
        }
        
        alertaBuy(data.mensaje);
        dispatch({ type: types.RETURN_EQUAL_AUTH, payload: data.estudiante });
    }


    return [handleComprar];


}
