import Modal from 'react-modal';
import { useState } from 'react';
import { ConvertedMenu } from '../declarations/menu';

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

type Props = {
    menu: ConvertedMenu;
};

export default function Modals({ menu }: Props) {
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
            <button onClick={openModal}>詳細</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenMofdal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2>{menu.title}</h2>
                <p>{menu.price}円</p>
                <button onClick={closeModal}>close</button>
            </Modal>
        </>
    )
}

