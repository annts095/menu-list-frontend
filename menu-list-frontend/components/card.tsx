import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ImageModal  from "./modal";

export default function Cards() {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100" >
                    <img src="karamen.JPG" className="card-img-top" alt="..." />
                    <ImageModal />
                    <div className="card-body">
                        <h5 className="card-title">辛麺</h5>
                        <p className="card-text"> 価格:600円</p>
                    </div>
                </div>
            </div>
        </div>
    )
}