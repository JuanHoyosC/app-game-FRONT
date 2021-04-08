import { useState } from 'react'
import { urlBase64ToUint8Array } from '../services/urlBase64ToUint8Array';
import jwt_decode from "jwt-decode"


const PUBLIC_APY_KEY = "BDjsBZpL71_3LP3aqWyWZjlXBnaVJ96NLSBkKzsAvNIQ52rHrdoJOmm3skil66D-3z4GHzKw_ZDBZFTT2FCbUoA";

export const useLogin = (form, dispatch, history) => {

    const [loading, setLoading] = useState(false);

    const subscribe = async () => {
        const path = `${process.env.PUBLIC_URL}/worker.js`;
        const register = await navigator.serviceWorker.register(path, {
            scope: '/'
        })

        const subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(PUBLIC_APY_KEY)
        })

        await fetch('http://localhost:4000/subscription', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(subscription) })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('http://localhost:4000/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(form) })
        const data = await res.json()
        if (data.continuar) {
            localStorage.setItem('appToken', data.token);
            const decoded = jwt_decode(data.token);
            const payload = {
                user: { ...decoded.token }
            }
            dispatch({ type: 'login', payload });
            history.push('/');
            await subscribe();
        }


    }

return [handleSubmit, loading];

}
