import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
    overlay: {
        positon: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '50%',
        height: '50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#__next');

export default function Modals() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenMofdal() {
        //モーダルを開いた後に実行する処理
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={openModal}>Open</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenMofdal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    )
}

