import { useState } from "react";

export const useDragAndDrop = () => {

    const [file, setFile] = useState({});

    const changeFile = (e) => {
        const archivo = e.target.files[0];
        readFile(archivo);
    }

    const readFile = (file) => {

        if (!file) return;

        setFile( file );

    }

    const dragOverHandler = (e) => {
        document.getElementById('to_upload').classList.add('to_upload-drag');
        // Preent default behavior (Preent file from being opened)
        e.preventDefault();
    }

    const dragLeave = (e) => {
        document.getElementById('to_upload').classList.remove('to_upload-drag');
    }

    const removeDragData = (e) => {

        document.getElementById('to_upload').classList.remove('to_upload-drag');

        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to remove the drag data
            e.dataTransfer.items.clear();
        } else {
            // Use DataTransfer interface to remove the drag data
            e.dataTransfer.clearData();
        }
    }

    const dropHandler = (e) => {

        e.preventDefault();

        if (!e.dataTransfer.items) return;

        readFile(e.dataTransfer.items['0'].getAsFile());

        removeDragData(e)
    }

    const handleReset = ({ target }) => {
        if(target.className.split(' ')[0] !== 'modal' && target.className.split(' ')[1] !== 'btn-cancelar') return ;
        setFile({});
    }

    return {
        dropHandler,
        changeFile,
        dragOverHandler,
        dragLeave, 
        handleReset,
        file
    }
}