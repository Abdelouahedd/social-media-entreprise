import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOut} from "../../../../redux/actions/authActions";

function AccountBox(props) {
    const dispatch = useDispatch();
    return (
        <div className="user-account-settingss" id="users" style={props.show}>
            <h3>Online Status</h3>
            <ul className="on-off-status">
                <li>
                    <div className="fgt-sec">
                        <input type="radio" name="cc" id="c5"/>
                        <label htmlFor="c5">
                            <span/>
                        </label>
                        <small>Online</small>
                    </div>
                </li>
                <li>
                    <div className="fgt-sec">
                        <input type="radio" name="cc" id="c6"/>
                        <label htmlFor="c6">
                            <span/>
                        </label>
                        <small>Offline</small>
                    </div>
                </li>
            </ul>
            <h3>Custom Status</h3>
            <div className="search_form">
                <form>
                    <input type="text" name="search"/>
                    <button type="submit">Ok</button>
                </form>
            </div>
            <h3>Setting</h3>
            <ul className="us-links">
                <li><Link to="/settings">Account Setting</Link></li>
                <li><a href="#" title="">Privacy</a></li>
                <li><a href="#" title="">Faqs</a></li>
                <li><a href="#" title="">Terms & Conditions</a></li>
            </ul>
            <h3 className="tc"><Link to="/sign" title="" onClick={() => dispatch(logOut())}>Logout</Link></h3>
        </div>

    )
}

export default AccountBox;