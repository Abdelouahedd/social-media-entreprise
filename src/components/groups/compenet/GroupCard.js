import React from 'react';

function GroupCard(props) {
    const {name, img, post, member} = props;


    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src={require("../../../assets/images/resources/cmp-icon1.png")} alt=""/>
                    <h3>{name}</h3>
                    {/*<h4>Establish Feb, 2004</h4>*/}
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
                {/*<a href="/" title="" className="view-more-pro">Join</a>*/}
                <button className="btn btn-primary d-block w-100 ">Join</button>
            </div>
        </div>
    );
}

export default GroupCard;