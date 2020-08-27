import React from 'react';
import './editProdil.css'
import user_img from '../../assets/images/resources/user-pro-img.png';
import cuver from "../../assets/images/resources/cover-img.jpg";

function EditProfil(props) {
    return (
        <div id="content-page" className="acc-setting">

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="iq-edit-list-data">
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="personal-information" role="tabpanel">
                                    <div className="iq-card">
                                        <div className="iq-card-body ">
                                            <form>
                                                <div className="form-group row ">
                                                    <section>
                                                        <img src={cuver} alt={"cuver img"}
                                                             className="img-fluid bg-img"/>
                                                        <div className="add-pic-box">
                                                            <div className="container">
                                                                <div className="row no-gutters">
                                                                    <div className="col-lg-12 col-sm-12">
                                                                        <input type="file" id="file"/>
                                                                        <label htmlFor="file"> <i
                                                                            className="fa fa-camera-retro"/></label>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </section>
                                                    <div className="col-md-12 d-flex justify-content-center">
                                                        <div className="user_profile">
                                                            <div className="user-pro-img">
                                                                <img src={user_img} alt="" />
                                                                <div className="add-dp" id="OpenImgUpload">
                                                                    <input type="file" id="file"/>
                                                                    <label htmlFor="file"><i
                                                                        className="fa fa-camera"/></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-sm-12">
                                                    <label>Address:</label>
                                                    <textarea className="form-control" name="address" rows="5"
                                                              style={{lineHeight: "22px"}}>
                                                             37 Cardinal Lane
                                                             Petersburg, VA 23803
                                                             United States of America
                                                             Zip Code: 85001
                                                        </textarea>
                                                </div>
                                                <div className=" row align-items-center">
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="fname">First Name:</label>
                                                        <input type="text" className="form-control" id="fname"
                                                               value="Bni" readOnly={true}/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="lname">Last Name:</label>
                                                        <input type="text" className="form-control" id="lname"
                                                               value="Jhon"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="uname">User Name:</label>
                                                        <input type="text" className="form-control" id="uname"
                                                               value="Bni@01"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="cname">City:</label>
                                                        <input type="text" className="form-control" id="cname"
                                                               value="Atlanta"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label className="d-block">Gender:</label>
                                                        <div
                                                            className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="customRadio6" name="customRadio1"
                                                                   className="custom-control-input" checked=""/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customRadio6"> Male </label>
                                                        </div>
                                                        <div
                                                            className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="customRadio7" name="customRadio1"
                                                                   className="custom-control-input"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customRadio7"> Female </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="dob">Date Of Birth:</label>
                                                        <input className="form-control" id="dob" value="1984-01-24"/>
                                                    </div>

                                                    <div className="form-group col-sm-6">
                                                        <label>Age:</label>
                                                        <input type="text" className="form-control"/>

                                                    </div>

                                                    <div className="form-group col-sm-6">
                                                        <label>State:</label>
                                                        <select className="form-control" id="exampleFormControlSelect4"
                                                                defaultChecked="Georgia">
                                                            <option>California</option>
                                                            <option>Florida</option>
                                                            <option selected="">Georgia</option>
                                                            <option>Connecticut</option>
                                                            <option>Louisiana</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="cno">Contact Number:</label>
                                                        <input type="text" className="form-control" id="cno"
                                                               value="001 2536 123 458"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="email">Email:</label>
                                                        <input type="text" className="form-control" id="email"
                                                               value="Bnijone@demo.com"/>
                                                    </div>
                                                    <div className="form-group col-sm-12">
                                                        <label>Address:</label>
                                                        <textarea className="form-control" name="address" rows="5"
                                                                  style={{lineHeight: "22px"}}>
                                                             37 Cardinal Lane
                                                             Petersburg, VA 23803
                                                             United States of America
                                                             Zip Code: 85001
                                                        </textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                <button type="reset" className="btn iq-bg-danger">Cancle</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfil;