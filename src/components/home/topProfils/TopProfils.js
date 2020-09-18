import React from 'react';
import envelop from "../../../assets/images/envelop.png";
import user_post from "../../../assets/images/resources/us-pic.png";
import Slider from "react-slick";
import './profilesSlider.css'

function Arrow(props) {
    return (
        <span className={props.styleArrow} onClick={props.onClick}/>
    );
}

function TopProfiles() {
    const users = [
        {
            id: 1,
            img: "/static/media/user-pic.d9673935.png",
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
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        className: "profiles-slider",
        variableWidth: true,
        nextArrow: <Arrow styleArrow={"slick-nexti"}/>,
        prevArrow: <Arrow styleArrow="slick-previous"/>
    };
    return (
        <div className="top-profiles">
            <div className="pf-hd">
                <h3>Top Profiles</h3>
                <i className="la la-ellipsis-v"/>
            </div>
            <Slider {...settings}>
                {
                    users.map(
                        user =>
                            <div className="user-profy" key={user.id}>
                                <img src={user_post} alt=""/>
                                <h3>{user.name}</h3>
                                <span>{user.job}</span>
                                <ul>
                                    <li><a href="/" title="" className="followw">Follow</a>
                                    </li>
                                    <li><a href="/" title="" className="envlp"><img
                                        src={envelop} alt=""/></a></li>
                                    <li><a href="/" title="" className="hire">hire</a></li>
                                </ul>
                                <a href="/" title="">View Profile</a>
                            </div>
                    )}
            </Slider>
        </div>
    );
}

export default TopProfiles;