import React from 'react';
import GroupCard from "./compenet/GroupCard";
import './group.css'

function Group(props) {
    const groups = [
        {
            id: 1,
            name: "Facebook Inc.",
            img: "images/resources/cmp-icon1.png",
            post: 120,
            member: 100
        },
        {
            id: 2,
            name: "Facebook Inc.",
            img: "images/resources/cmp-icon1.png",
            post: 120,
            member: 100
        },
        {
            id: 3,
            name: "Facebook Inc.",
            img: "images/resources/cmp-icon1.png",
            post: 120,
            member: 100
        },
        {
            id: 4,
            name: "Facebook Inc.",
            img: "images/resources/cmp-icon1.png",
            post: 120,
            member: 100
        }
    ]
    return (
        <section className="companies-info">
            <div className="container ">
                <div className="company-title">
                    <h3>All Groupes</h3>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {
                            groups.map(group =>
                                <GroupCard key={group.id} id={group.id}
                                           name={group.name}
                                           img={group.img}
                                           post={group.post}
                                           member={group.member}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Group;