import React, { useEffect, useState } from 'react';
import user_post from "../../../assets/images/resources/us-pic.png";
import Slider from "react-slick";
import './profilesSlider.css'
import { URL } from '../../../redux/_helper/utility';

function Arrow(props) {
    return (
        <span className={props.styleArrow} onClick={props.onClick} />
    );
}

function TopProfiles() {

    const [users, setUsers] = useState([])

    const fetchData = async () => {
        await fetch(`${URL}/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('jwtInfo')
            }
        }).then(res => res.json())
            .then(res => {
                if (res.success === true) {
                    setUsers(res.user);
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        className: "profiles-slider",
        variableWidth: true,
        nextArrow: <Arrow styleArrow={"slick-nexti"} />,
        prevArrow: <Arrow styleArrow="slick-previous" />
    };
    return (
        <>
            {
                users.length < 3
                    ?
                    null
                    :
                    <div className="top-profiles">
                        <div className="pf-hd">
                            <h3>Top Profiles</h3>
                            <i className="la la-ellipsis-v" />
                        </div>
                        <Slider {...settings}>
                            {
                                users.map(
                                    user =>
                                        <div className="user-profy" key={user.id}>
                                            <img src={user_post} alt="" />
                                            <h3>{user.name}</h3>
                                            <span>{user.job}</span>
                                            <div></div>
                                            <a href="/" title="">View Profile</a>
                                        </div>
                                )}
                        </Slider>
                    </div>
            }

        </>
    );
}

export default TopProfiles;