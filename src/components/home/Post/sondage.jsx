import { message, Radio } from 'antd';
import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../../redux/_helper/utility';
import './sondage.css'

function Sondage(props) {
    const sondage = { ...props };

    const [editOption, setEditOption] = useState(false);
    const [like, setLike] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [checkedOption, setcheckedOption] = useState("");



    const defaultOption = useCallback(
        async () => {
            await fetch(`${URL}/sondage/getdefault/${sondage._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    console.log(response);
                    if (response.success === true) {
                        setcheckedOption(response.defaultChoix);
                    }
                })
                .catch(err => message.error('Error please try again', err));
        },
        [sondage._id],
    )

    useEffect(() => {
        defaultOption();
    }, [defaultOption])


    const onVote = async (option) => {
        await fetch(`${URL}/sondage/addVote/${sondage._id}`, {
            method: 'POST',
            body: JSON.stringify({ checkedOption: option }),
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
            }
        }).then(res => res.json())
            .then((response) => console.log(response))
            .catch(err => message.error('Error please try again', err));
    }

    const handlerChange = (e) => {
        setcheckedOption(e.target.value);
        setTimeout(async () => await onVote(e.target.value), 1000);
    }


    return (
        <div className="card gedf-Applecard">
            <div className="card-header">
                {/* Header of the card */}
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-2">
                            <img className="avatar rounded-circle" src={URL + sondage?.user.photo_profil} alt="user_img" />
                        </div>
                        <div className="ml-2">
                            <Link to={`/profile/${sondage?.user._id}`}>
                                <div className="h5 m-0">{sondage?.user.nom + " " + sondage?.user.prenom}</div>
                            </Link>
                        </div>
                    </div>
                    <div className="ed-opts">
                        <p className="ed-opts-open" style={{ cursor: "pointer" }}
                            onClick={() => setEditOption(!editOption)}
                        >
                            <i className="la la-ellipsis-v" />
                        </p>
                        <ul className={editOption ? "ed-options active" : "ed-options"}>
                            <li><a href="edit" title="">Edit sondage</a></li>
                            <li><a href="delete" title="">delete sondage</a></li>
                            <li><a href="Hide" title="">Hide</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* body of tthe card  */}
            <div className="card text-left">
                <div className="card-body">
                    <h4 className="card-title">{sondage?.description}</h4>
                    <div className="list-group">
                        <Radio.Group
                            onChange={handlerChange}
                            value={checkedOption}
                        >
                            {
                                sondage?.choix.map((op, index) =>
                                    <Radio key={index} className="radio_style" value={op}>
                                        {op}
                                    </Radio>
                                )
                            }
                        </Radio.Group>


                    </div>
                </div>
            </div>
            {/* footer of the card */}
            <div className="card-footer bg-white border-1 p-0">
                <div className="d-flex justify-content-between align-items-center my-1">
                    <div className="col">
                        <button type="button" className="btn btn-fbook btn-block btn-sm"
                            onClick={() => setLike(!like)}><i
                                className={like ? "fa fa-heart" : "fa fa-heart-o"}
                                aria-hidden="true" /> Like
                            </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-fbook btn-block btn-sm"
                            onClick={() => setShowComments(!showComments)}><i
                                className="fa fa-comment-o"
                                aria-hidden="true" /> Commente
                    </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-fbook btn-block btn-sm">
                            <i className="fa fa-share" aria-hidden="true" /> Share
                    </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Sondage;