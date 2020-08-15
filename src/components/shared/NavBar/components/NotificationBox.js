import React from 'react';

function NotificationBox(props) {
    return (
        <div className="notification-box noti" id="notification" style={props.show}>
            <div className="nt-title">
                <h4>Setting</h4>
                <a href="#" title="">Clear all</a>
            </div>
            <div className="nott-list">
                <div className="notfication-details">
                    <div className="noty-user-img">
                        <img src={require("../../../../assets/images/resources/ny-img1.png")} alt=""/>
                    </div>
                    <div className="notification-info">
                        <h3><a href="#" title="">Jassica William</a> Comment on your
                            project.
                        </h3>
                        <span>2 min ago</span>
                    </div>
                </div>
                <div className="view-all-nots">
                    <a href="#" title="">View All Notification</a>
                </div>
            </div>
        </div>
    );
}

export default NotificationBox;