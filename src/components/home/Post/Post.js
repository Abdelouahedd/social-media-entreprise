import React, {useEffect, useState} from 'react';
import './post.css'
import Comment from "./comments/comment";
import {Link} from "react-router-dom";
// import {Carousel, Modal} from "react-bootstrap";
import {Carousel} from "react-bootstrap";
import Comments from "./comments/comments";

function Post(props) {
    const post = props;
    const handleShow = () => {
        const postPopUp = document.querySelector('.detail-post');
        const root = document.querySelector('.wrapper');
        const nav = document.querySelector('.iq-top-navbar');
        postPopUp.classList.add('active');
        root.classList.add('overlay');
        nav.classList.add('active');

    }
    const handleClose = () => {
        const root = document.querySelector('.wrapper');
        const nav = document.querySelector('.iq-top-navbar');
        const postPopUp = document.querySelector('.detail-post');
        root.classList.remove('overlay');
        nav.classList.remove('active');
        postPopUp.classList.remove('active');
    }

    //State
    const [editOption, setEditOption] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [like, setLike] = useState(false);

    //filter the URL from String
    const urlify = (text) => {
        let urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function (url) {
            return `<a className="card-link" href=${url} target="_blank">${url}</a>`;
        })
    }
    const filterContent = (file) => {
        if (file.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            return <img className="card-img-top rounded-0 " src={file} alt="Card image cap"/>
        } else if (file.match(/\.(mp4)$/)) {
            return <video className="card-img-top rounded-0" controls>
                <source src={file}/>
            </video>
        }
        return <img className="card-img-top rounded-0 " src={file} alt="Card image cap"/>
    }


    return (
        <>
            <div className="card gedf-card">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="avatar rounded-circle" width="45"
                                     src={post.user.photo_profil} alt="user_img"/>
                            </div>
                            <div className="ml-2">
                                <Link to={`/profile/${post.user._id}`}>
                                    <div className="h5 m-0">{post.user.nom + " " + post.user.prenom}</div>
                                </Link>
                                {/*<div className="h7 text-muted">Miracles Lee Cross</div>*/}
                            </div>
                        </div>
                        <div className="ed-opts">
                            <p className="ed-opts-open" style={{cursor: "pointer"}}
                               onClick={() => setEditOption(!editOption)}
                            >
                                <i className="la la-ellipsis-v"/>
                            </p>
                            <ul className={editOption ? "ed-options active" : "ed-options"}>
                                <li><a href="#" title="">Edit Post</a></li>
                                <li><a href="#" title="">Unsaved</a></li>
                                <li><a href="#" title="">Unbid</a></li>
                                <li><a href="#" title="">Close</a></li>
                                <li><a href="#" title="">Hide</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"></i>{post.createdAt}</div>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: urlify(post.sujet)}}></p>
                    {post.files.length > 3 ?
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
                    {/* <div className="photo">
                        <div className="children">
                            <img className="card-img-top rounded-0 " src="https://picsum.photos/320/250/?random"
                                 alt="Card image cap"/>
                        </div>
                        <div className="children">
                            <img className="card-img-top rounded-0 " src="https://picsum.photos/320/250/?random"
                                 alt="Card image cap"/>
                        </div>
                        <div className="children">
                            <img className="card-img-top rounded-0 " src="https://picsum.photos/320/250/?random"
                                 alt="Card image cap"/>
                            <div className="children_float">
                                +8
                            </div>
                        </div>
                    </div>*/}
                </div>
                <div className="card-footer bg-white border-1 p-0">
                    <div className="d-flex justify-content-between align-items-center my-1">
                        <div className="col">
                            <button type="button" className="btn btn-fbook btn-block btn-sm"
                                    onClick={() => setLike(!like)}><i
                                className={like ? "fa fa-heart" : "fa fa-heart-o"}
                                aria-hidden="true"/> Like
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-fbook btn-block btn-sm"
                                    onClick={() => setShowComments(!showComments)}><i
                                className="fa fa-comment-o"
                                aria-hidden="true"/> Commente
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-fbook btn-block btn-sm">
                                <i className="fa fa-share" aria-hidden="true"/> Share
                            </button>
                        </div>
                    </div>
                </div>
                {/*Comment*/}
                <Comments post={post} showComments={showComments}/>
                {/*<Comment comments={post.commantaires} />*/}
            </div>

            {/* <Modal
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
            </Modal>*/}
            {/*            <div className="container-fluid detail-post ">
                <div className="row">
                    <div className="col-8 bg-light" style={{
                        display: "flex",
                        alignItems: "center"
                    }}>

                        <Carousel className="align-self-center">
                            {post.files.map((file, i) =>
                                <Carousel.Item key={i} interval={100000}>
                                     <div className="d-block w-100 px-2">
                                    </div>
                                    {filterContent(file)}
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                    <div className="col-4 bg-light ">
                        <h1 onClick={() => handleClose()}>Post</h1>
                        <div className="card gedf-card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-2">
                                            <img className="avatar rounded-circle" width="45"
                                                 src={post.user.photo_profil} alt=""/>
                                        </div>
                                        <div className="ml-2">
                                            <Link to="/">
                                                <div className="h5 m-0">{post.user.nom + " " + post.user.prenom}</div>
                                            </Link>
                                            <div className="h7 text-muted">Miracles Lee Cross</div>
                                        </div>
                                    </div>
                                    <div className="ed-opts">
                                        <p className="ed-opts-open" style={{cursor: "pointer"}}
                                           onClick={() => setEditOption(!editOption)}
                                        >
                                            <i className="la la-ellipsis-v"/>
                                        </p>
                                        <ul className={editOption ? "ed-options active" : "ed-options"}>
                                            <li><a href="#" title="">Edit Post</a></li>
                                            <li><a href="#" title="">Unsaved</a></li>
                                            <li><a href="#" title="">Unbid</a></li>
                                            <li><a href="#" title="">Close</a></li>
                                            <li><a href="#" title="">Hide</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"></i>{post.createdAt}
                                </div>
                                <p className="card-text" dangerouslySetInnerHTML={{__html: urlify(post.sujet)}}></p>
                                {post.files.length > 3 ?
                                    (<div className="photo">
                                        {post.files.slice(0, 3).map((file, i) =>
                                            <div key={i} className="children">
                                                {
                                                    i !== 2 ?
                                                        filterContent(file)
                                                        :
                                                        <div>
                                                            {filterContent(file)}
                                                            <div className="children_float"
                                                                 onClick={() => handleShow()}>
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
                                 <div className="photo">
                        <div className="children">
                            <img className="card-img-top rounded-0 " src="https://picsum.photos/320/250/?random"
                                 alt="Card image cap"/>
                        </div>
                        <div className="children">
                            <img className="card-img-top rounded-0 " src="https://picsum.photos/320/250/?random"
                                 alt="Card image cap"/>
                        </div>
                        <div className="children">
                            <img className="card-img-top rounded-0 " src="https://picsum.photos/320/250/?random"
                                 alt="Card image cap"/>
                            <div className="children_float">
                                +8
                            </div>
                        </div>
                    </div>
                            </div>
                            <div className="card-footer bg-white border-1 p-0">
                                <div className="d-flex justify-content-between align-items-center my-1">
                                    <div className="col">
                                        <button type="button" className="btn btn-fbook btn-block btn-sm"
                                                onClick={() => setLike(!like)}><i
                                            className={like ? "fa fa-heart" : "fa fa-heart-o"}
                                            aria-hidden="true"/> Like
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-fbook btn-block btn-sm"
                                                onClick={() => setShowComments(!showComments)}><i
                                            className="fa fa-comment-o"
                                            aria-hidden="true"/> Commente
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-fbook btn-block btn-sm">
                                            <i className="fa fa-share" aria-hidden="true"/> Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                            Comment
                            <Comment postId={post._id} showComments={showComments}/>
                        </div>
                    </div>
                </div>
            </div>*/}
        </>
    );
}

export default Post;