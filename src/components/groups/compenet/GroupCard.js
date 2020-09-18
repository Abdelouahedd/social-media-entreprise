import React from 'react';

function GroupCard(props) {
    const {name, img, post, member} = props;


    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src={require("../../../assets/images/resources/cmp-icon1.png")} alt=""/>
                    <h3>{name}</h3>
                    <ul>
                        <li className="pl-3 pr-3">
                            <p className="mb-0">Post </p>
                            <h6>{post}</h6>
                        </li>
                        <li>
                            <p className="mb-0">Member </p>
                            <h6>{member}</h6>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-primary d-block w-100 ">Join</button>
            </div>
        </div>
    );
}

export default GroupCard;