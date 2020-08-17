import React  from 'react'
import user_img from '../../../assets/images/resources/user-pro-img.png';

export const LeftSideBar = () => {
    return (
        <div className="main-left-sidebar">
            <div className="user_profile">
                <div className="user-pro-img">
                    <img src={user_img} alt="" />
                    <div className="add-dp" id="OpenImgUpload">
                        <input type="file" id="file" />
                        <label htmlFor="file"><i
                            className="fa fa-camera" /></label>
                    </div>
                </div>
                <div className="user_pro_status">
                    <ul className="flw-status">
                        <li>
                            <span>Following</span>
                            <b>34</b>
                        </li>
                        <li>
                            <span>Followers</span>
                            <b>155</b>
                        </li>
                    </ul>
                </div>
                <ul className="social_links">
                    <li><a href=" www.example.com" title=""><i
                        className="la la-globe" /> www.example.com</a>
                    </li>
                    <li><a href=" www.example.com" title=""><i
                        className="fa fa-facebook-square" /> Http://www.facebook.com/john...</a>
                    </li>
                    <li><a href=" www.example.com" title=""><i
                        className="fa fa-twitter" /> Http://www.Twitter.com/john...</a>
                    </li>
                    <li><a href=" www.example.com" title=""><i
                        className="fa fa-google-plus-square" /> Http://www.googleplus.com/john...</a>
                    </li>
                    <li><a href=" www.example.com" title=""><i
                        className="fa fa-behance-square" /> Http://www.behance.com/john...</a>
                    </li>
                    <li><a href=" www.example.com" title=""><i
                        className="fa fa-pinterest" /> Http://www.pinterest.com/john...</a>
                    </li>
                    <li><a href=" www.example.com" title=""><i
                        className="fa fa-instagram" /> Http://www.instagram.com/john...</a>
                    </li>
                    <li><a href=" www.example.com" title=""><i
                        className="fa fa-youtube" /> Http://www.youtube.com/john...</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}



export default LeftSideBar;
