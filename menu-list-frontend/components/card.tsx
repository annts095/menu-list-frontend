import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { ConvertedMenu } from '../declarations/menu';
import ImageModal  from "./modal";

type Props = {
    menu: ConvertedMenu;
};

export default function Card({ menu }: Props) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100" >
                    { menu.image_url !== null && <img src={menu.image_url} className="card-img-top" alt="..." /> }
                    <ImageModal menu={menu}/>
                    <div className="card-body">
                        <h5 className="card-title">{ menu.title }</h5>
                        <p className="card-text"> 価格:{ menu.price }円</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
