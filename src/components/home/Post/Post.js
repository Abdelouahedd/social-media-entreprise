import React, { useCallback, useEffect, useState } from 'react';
import './post.css'
import { Link } from "react-router-dom";
import Comments from "./comments/comments";
import moment from "moment";
import { Carousel, Modal } from "react-bootstrap";
import { URL } from '../../../redux/_helper/utility';
import { currentUser } from '../../../_helper/services';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../../redux/actions/postActions';
import { message } from 'antd';

function Post(props) {


    // const post = props;
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    //State
    const [post, setPost] = useState(props);
    const [editOption, setEditOption] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [like, setLike] = useState();
    const [show, setShow] = useState(false);

    const liket = useCallback(
        () => {
            if (post.like.includes(currentUser._id)) {
                return true;
            }
            return false;
        },
        [post.like]
    )

    const dispatch = useDispatch();

    const handlerLike = useCallback(
        async () => {
            await fetch(`${URL}/posts/like/${post._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    console.log("like==>", response);
                    dispatch(updatePost(response.post));
                    post.like.push(currentUser._id);
                    setPost(post)
                })
                .catch(err => message.error('Error please try again', err));
        },
        [dispatch, post],
    );

    const handlerDesLike = useCallback(
        async () => {
            await fetch(`${URL}/posts/deslike/${post._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('jwtToken')
                }
            }).then(res => res.json())
                .then((response) => {
                    console.log("deslike==>", response);
                    dispatch(updatePost(response.post));
                    const newLikes = post.like.filter(likeId => likeId !== currentUser._id);
                    post.like = newLikes;
                    setPost(post);
                })
                .catch(err => message.error('Error please try again', err));
        },
        [dispatch, post],
    );

    const handlerChangeLike = () => {
        if (like === true) {
            handlerDesLike();
            setLike(false);
        } else if (like === false) {
            handlerLike();
            setLike(true);
        }
    }

    useEffect(() => {
        setPost(props);
        setLike(liket());
    }, [liket, props]);



    //filter the URL from String
    const urlify = (text) => {
        let urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function (url) {
            return `<a className="card-link" href=${url} target="_blank">${url}</a>`;
        })
    }
    const filterContent = (file) => {
        if (file.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            return <img className="card-img-top rounded-0 " src={file} alt="Card  cap" />
        } else if (file.match(/\.(mp4)$/)) {
            return <video className="card-img-top rounded-0" controls>
                <source src={file} />
            </video>
        }
        return <img className="card-img-top rounded-0 " src={file} alt="Card  cap" />
    }


    return (
        <>
            <div className="card gedf-card">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="avatar rounded-circle" width="45"
                                    src={URL + post.user.photo_profil} alt="user_img" />
                            </div>
                            <div className="ml-2">
                                <Link to={`/profile/${post.user._id}`}>
                                    <div className="h5 m-0">{post.user.nom + " " + post.user.prenom}</div>
                                </Link>
                                {/*<div className="h7 text-muted">Miracles Lee Cross</div>*/}
                            </div>
                        </div>
                        <div className="ed-opts">
                            <p className="ed-opts-open" style={{ cursor: "pointer" }}
                                onClick={() => setEditOption(!editOption)}
                            >
                                <i className="la la-ellipsis-v" />
                            </p>
                            <ul className={editOption ? "ed-options active" : "ed-options"}>
                                <li><a href="edit" title="">Edit Post</a></li>
                                <li><a href="delete" title="">delete Post</a></li>
                                <li><a href="Hide" title="">Hide</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"
                        style={{ marginRight: "2px" }} />{moment().from(post.createdAt)}
                    </div>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: urlify(post.sujet) }}></p>
                    {
                        post.files.length > 3 ?
                            (<div className="photo">
                                {post.files.slice(0, 3).map((file, i) =>
                                    <div key={i} className="children">
                                        {
                                            i !== 2 ?
                                                filterContent(file)
                                                :
                                                <div>
                                                    {filterContent(file)}
                                                    <div className="children_float" onClick={() => handleShow()}>
                                                        +{post.files.length}
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                )}
                            </div>)
                            :
                            (<div className="photo_two_children">
                                {post.files.map((file, i) =>
                                    <div key={i} className="two_children">
                                        {filterContent(file)}
                                    </div>
                                )}
                            </div>)
                    }
                </div>
                <div className="card-footer bg-white border-1 p-0">
                    <div className="d-flex justify-content-between align-items-center my-1">
                        <div className="col">
                            <button type="button" className="btn btn-fbook btn-block btn-sm"
                                onClick={() => handlerChangeLike()}><i
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
                {/*Comment*/}
                <Comments post={post} showComments={showComments} />
            </div>

            <Modal
                show={show}
                size="lg"
                onHide={() => handleClose()}
                dialogClassName="modal-900w"
                aria-labelledby="example-custom-modal-styling-title"
            >

                <Modal.Body>
                    <Modal.Header closeButton>
                    </Modal.Header>

                    <Carousel>
                        {post.files.map((file, i) =>
                            <Carousel.Item key={i} interval={100000}>
                                <div className="d-block w-100">
                                    {filterContent(file)}
                                </div>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Post;