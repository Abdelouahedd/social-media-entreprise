import React, {useEffect, useState} from 'react';
import './comments.css';

function Comment(props) {
    const [comment, setComment] = useState("");
    const [commantaires, setCommantaires] = useState(props.commantaires);

    const addComment = (e) => {
        e.preventDefault();
        const NewComment = {
            content: comment
        }
        // commantaires.push(NewComment);
        props.commantaires.push(NewComment);
        setCommantaires(props.commantaires);
        setComment("");
        console.log(commantaires);
    }

    const handlerChange = (e) => setComment(e.target.value);

    return (
        <div className={props.showComments == true ? "section_comment active" : "section_comment"}>
            <div className="box-footer">
                <form onSubmit={addComment}>
                    <img className="img-responsive img-circle img-sm"
                         src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Alt Text"/>
                    <div className="img-push">
                        <input type="text" className="form-control input-sm"
                               placeholder="Press enter to post comment" name="comment" value={comment}
                               onChange={(e) => handlerChange(e)}
                        />
                    </div>
                </form>
            </div>
            {
                commantaires.length !== 0
                    ? commantaires.map((c) =>
                        <div className=" comment container-fluid">
                            <div className="media">
                                <div className="media-left">
                                    {/*  <img src={comment.user.photo_profil} className="rounded-circle"
                                         style={{width: "40px"}}/>*/}
                                </div>
                                <div className="media-body">
                                    {/*<h4 className="media-heading title">{comment.user.nom}</h4>*/}
                                    <p className="komen text-justify">
                                        {c.content}
                                    </p>
                                    <a href="#">reply</a>
                                </div>
                            </div>
                            {
                                (c.replays !== undefined && c.replays.length !== 0)
                                    ?
                                    c.replays.map(re => {
                                        return <div className="geser">
                                            <div className="media">
                                                <div className="media-left">
                                                    <img src={re.user.photo_profil} className="rounded-circle"
                                                         style={{width: "40px"}}/>
                                                </div>
                                                <div className="media-body">
                                                    <h4 className="media-heading title">{re.user.nom}</h4>
                                                    <p className="komen">
                                                        {re.content}
                                                    </p>
                                                    <a href="#">reply</a>
                                                </div>
                                            </div>
                                            <div className="box-footer">
                                                <form action="#" method="post">
                                                    <img className="img-responsive img-circle img-sm"
                                                         src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                         alt="Alt Text"/>
                                                    <div className="img-push">
                                                        <input type="text" className="form-control input-sm"
                                                               placeholder="Press enter to post comment"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    })
                                    : null
                            }
                        </div>)
                    : null
            }

        </div>
    );
}

export default Comment;