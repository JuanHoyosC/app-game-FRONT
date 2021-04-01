import React from 'react'
import './mensajes.css';
export const Mensajes = () => {

        return (
            <div>
                <div className="position-fixed mensaje bottom-0 end-0 p-3">
                    <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header text-white">
                            <img src="..." className="rounded me-2" alt="..." />
                            <strong className="me-auto">RobotGame</strong>
                            <small>11 mins ago</small>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body text-white">
                            Hello, world! This is a toast message.
        </div>
                    </div>
                </div>
            </div>
        )
    }
