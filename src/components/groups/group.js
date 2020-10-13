import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import GroupCard from "./compenet/GroupCard";
import { URL } from '../../redux/_helper/utility';

import './group.css'
import { Link } from 'react-router-dom';

function Group(props) {

    const [groups, setGroups] = useState([]);
    const [Odergroups, setOserGroups] = useState([]);


    const fetchData = async () => {
        await fetch(`${URL}/communaute`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then((response) => {
                console.info(response);
                if (response.success === true) {
                    setGroups(response.communaute);
                    setOserGroups(response.oderGroup);
                    console.info(response.msg);
                }
            })
            .catch(err => message.error('Error please try again', err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="companies-info my-3">
            <div className="container ">
                <div className='row'>
                    <div className="col-12 company-title">
                        <h3>All Groupes</h3>
                    </div>
                </div>

                <div className="companies-list">
                    <div className="row ">
                        <div className="col-4" >
                            <ul className=" list-group">
                                {
                                    groups.map(group =>
                                        <li key={group._id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/group">
                                                <GroupCard
                                                    id={group?._id}
                                                    name={group?.titre}
                                                    img={group?.photo_com}
                                                    coverture={group?.coverture}
                                                    members={group?.members}
                                                />
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                {
                                    Odergroups.map(group =>
                                        <div key={group._id} className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="company_profile_info">
                                                <div className="company-up-info">
                                                    <img className="img-fluid img-thumbnail" src={URL + group?.photo_com} alt="" />
                                                    <h3 className="card-title">{group?.titre}</h3>

                                                    <h6 className="card-subtitle text-muted">{group?.visibilite}</h6>
                                                </div>
                                                <button className="btn btn-primary d-block w-100">Join</button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Group;