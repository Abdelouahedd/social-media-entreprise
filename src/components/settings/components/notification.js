import React from 'react';

function Notification(props) {
    return (
        <div className="acc-setting">
            <h3>Notifications</h3>
            <div className="notifications-list">
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src={require("../../../assets/images/resources/ny-img1.png")}
                             alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Jassica William</a> Comment on your
                            project.</h3>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src="images/resources/ny-img2.png" alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Poonam Verma</a> Bid on your Latest
                            project.</h3>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src="images/resources/ny-img3.png" alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Tonney Dhman</a> Comment on your project.
                        </h3>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src="images/resources/ny-img1.png" alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Jassica William</a> Comment on your
                            project.</h3>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src="images/resources/ny-img1.png" alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Jassica William</a> Comment on your
                            project.</h3>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src="images/resources/ny-img2.png" alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Poonam Verma </a> Bid on your Latest
                            project.</h3>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src="images/resources/ny-img3.png" alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Tonney Dhman</a> Comment on your project
                        </h3>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src="images/resources/ny-img1.png" alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Jassica William</a> Comment on your
                            project.</h3>
                        <span>2 min ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;