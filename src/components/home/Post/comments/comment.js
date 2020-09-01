import React from 'react';
import './comments.css';

function Comment(props) {
    return (
        <div className={props.showComments == true ? "section_comment active" : "section_comment"}>
            <div className="box-footer">
                <form action="#" method="post">
                    <img className="img-responsive img-circle img-sm"
                         src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Alt Text"/>
                    <div className="img-push">
                        <input type="text" className="form-control input-sm"
                               placeholder="Press enter to post comment"/>
                    </div>
                </form>
            </div>
            <div className=" comment container-fluid">
                <div>
                    <div className="media">
                        <div className="media-left">
                            <img src="http://fakeimg.pl/50x50" className="rounded-circle"
                                 style={{width: "40px"}}/>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading title">Fahmi Arif</h4>
                            <p className="komen text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi architecto
                                aspernatur atque beatae, culpa, deleniti dignissimos, dolore dolorem dolores
                                earum
                                facilis id libero minus obcaecati qui rerum ut veniam!<br/>
                            </p>
                            <a href="#">reply</a>
                        </div>
                    </div>
                    <div className="geser">
                        <div className="media">
                            <div className="media-left">
                                <img src="http://fakeimg.pl/50x50" className="rounded-circle"
                                     style={{width: "40px"}}/>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading title">Fahmi Arif</h4>
                                <p className="komen">
                                    kalo bisa ya ndak usah gan biar cepet<br/>
                                </p>
                                <a href="#">reply</a>
                            </div>
                        </div>
                        <div className="box-footer">
                            <form action="#" method="post">
                                <img className="img-responsive img-circle img-sm"
                                     src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Alt Text"/>
                                <div className="img-push">
                                    <input type="text" className="form-control input-sm"
                                           placeholder="Press enter to post comment"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" comment container-fluid">
                <div className="row">
                    <div className="media">
                        <div className="media-left">
                            <img src="http://fakeimg.pl/50x50" className="rounded-circle"
                                 style={{width: "40px"}}/>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading title">Fahmi Arif</h4>
                            <p className="komen text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi architecto
                                aspernatur atque beatae, culpa, deleniti dignissimos, dolore dolorem dolores
                                earum
                                facilis id libero minus obcaecati qui rerum ut veniam!<br/>
                                <a href="#">reply</a>
                            </p>
                        </div>
                    </div>
                    <div className="geser">
                        <div className="media">
                            <div className="media-left">
                                <img src="http://fakeimg.pl/50x50" className="rounded-circle"
                                     style={{width: "40px"}}/>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading title">Fahmi Arif</h4>
                                <p className="komen">
                                    kalo bisa ya ndak usah gan biar cepet<br/>
                                    <a href="#">reply</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;