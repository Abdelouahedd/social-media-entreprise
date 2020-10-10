import React from 'react';
import { URL } from '../../../redux/_helper/utility';

function GroupCard(props) {
    const { name, img } = props;

    return (
        <>
           
            <div className="card mb-3" >
                <div className="row no-gutters d-flex align-items-center justify-content-center">
                    <div className="col-md-4 col-sm-12">
                        <img src={URL + img} alt="" className="card-img" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GroupCard;