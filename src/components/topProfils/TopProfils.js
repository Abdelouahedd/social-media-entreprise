import React from 'react';
import envelop from "../../assets/images/envelop.png";
import user_post from "../../assets/images/resources/us-pic.png";

function TopProfiles() {
    const users = [
        {
            id: 1,
            img: "../../assets/images/resources/us-pic.png",
            name: "John Doe",
            job: "Graphic Designer",

        }, {
            id: 2,
            img: "../../assets/images/resources/us-pic.png",
            name: "John Doe",
            job: "Graphic Designer",

        }, {
            id: 3,
            img: "../../assets/images/resources/us-pic.png",
            name: "John Doe",
            job: "Graphic Designer",

        }, {
            id: 4,
            img: "../../assets/images/resources/us-pic.png",
            name: "John Doe",
            job: "Graphic Designer",

        },
    ]
    return (
        <div className="top-profiles">
            <div className="pf-hd">
                <h3>Top Profiles</h3>
                <i className="la la-ellipsis-v"/>
            </div>
            <div className="profiles-slider">
                {
                    users.map(
                        user =>
                            <div className="user-profy" key={user.id}>
                                <img src={user.img} alt=""/>
                                <h3>{user.name}</h3>
                                <span>{user.job}</span>
                                <ul>
                                    <li><a href="#" title="" className="followw">Follow</a>
                                    </li>
                                    <li><a href="#" title="" className="envlp"><img
                                        src={envelop} alt=""/></a></li>
                                    <li><a href="#" title="" className="hire">hire</a></li>
                                </ul>
                                <a href="#" title="">View Profile</a>
                            </div>
                    )}
            </div>
        </div>
    );
}

export default TopProfiles;