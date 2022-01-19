import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useState } from 'react';
import  Modal  from 'react-modal';

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

export default function Cards() {

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
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src="karamen.JPG" className="card-img-top" alt="..." onClick={openModal}/>
                    {/* <button onClick={openModal}>Open</button> */}
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenMofdal}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >
                        <h2>Hello</h2>
                        <button onClick={closeModal}>close</button>
                    </Modal>
                    <div className="card-body">
                        <h5 className="card-title">辛麺</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="karamen.JPG" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">辛麺</h5>
                        <p className="card-text">This is a short card.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="karamen.JPG" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">辛麺</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="karamen.JPG" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">辛麺</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}