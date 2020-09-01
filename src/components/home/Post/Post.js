import React, {useState} from 'react';
import './post.css'
import Comment from "./comments/comment";

function Post(props) {
    const [editOption, setEditOption] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [like, setLike] = useState(false);


    return (
        <>
            <div className="card gedf-card">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="avatar rounded-circle" width="45" src="https://picsum.photos/50/50"
                                     alt=""/>
                            </div>
                            <div className="ml-2">
                                <div className="h5 m-0">@LeeCross</div>
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
                    <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"></i> Hace 40 min</div>

                    <a className="card-link" href="#">
                        <h5 className="card-title">Totam non adipisci hic! Possimus ducimus amet, dolores illo ipsum
                            quos
                            cum.</h5>
                    </a>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt fugit reprehenderit
                        consectetur exercitationem odio,
                        quam nobis? Officiis, similique, harum voluptate, facilis voluptas pariatur dolorum tempora
                        sapiente
                        eius maxime quaerat.
                        <a href="https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU"
                           target="_blank">https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU</a>
                    </p>
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
                                aria-hidden="true"></i> Like
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-fbook btn-block btn-sm"
                                    onClick={() => setShowComments(!showComments)}><i
                                className="fa fa-comment-o"
                                aria-hidden="true"></i> Commente
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-fbook btn-block btn-sm"><i
                                className="fa fa-share"
                                aria-hidden="true"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
                {/*Comment*/}
                <Comment showComments={showComments}/>
            </div>
        </>
    );
}

export default Post;