import { useEffect } from "react";
import { useState } from "react"
import { machines } from "../../../api/app";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../js/setting";
import { difficulty } from "../../../js/setting";


function Quest(){
    const [data,setData] = useState(null);
    const navigator = useNavigate();

    useEffect(() => {
        setData(machines());
    },[]);

    function check(){
        if(data !== null){
            return true;
        }
        return false;
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12  text-center">
                        <h1 className="display-1 bold color_white content__title">QUESTS<span className="vim-caret">&nbsp;</span></h1>
                        <p className="text-grey text-spacey hackerFont lead mb-5">
                            Its time to show the world what you can do!
                        </p>
                    </div>
                </div>
                <div className="row hackerFont">
                    <div className="col-md-12">
                        <h4>Challenges</h4>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card category_web">
                            <div className="card-header solved" data-target="#problem_id_1" data-toggle="collapse" aria-expanded="false" aria-controls="problem_id_1">
                                Bombs Landed <span className="badge">solved</span> <span className="badge">80 points</span>
                            </div>
                            <div id="problem_id_1" className="collapse card-body">
                                <blockquote className="card-blockquote">
                                    <div style={{display: "flex;"}}>
                                        <h6 className="solvers">Solvers: <span className="solver_num">76</span> &nbsp;<span className="color_danger">Difficulty:</span></h6>
                                        <div className="pl-2"><canvas style={{width:"80px",height:"20px"}} id="problem_id_1_chart"></canvas></div>
                                    </div>
                                    <p> Can you find the password? Enter the password as flag in the following form: lakshya_CTF password here
                                    </p>
                                    <a target="_blank" href="#!" className="btn btn-outline-secondary btn-shadow"><span className="fa fa-download mr-2"></span>Download</a>
                                    <a href="#hint" data-toggle="modal" data-target="#hint" className="btn btn-outline-secondary btn-shadow"><span className="far fa-lightbulb mr-2"></span>Hint</a>
                                    <div className="input-group mt-3">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1_p1" name="customRadio_p1" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio1_p1">Very Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio2_p1" name="customRadio_p1" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio2_p1">Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio3_p1" name="customRadio_p1" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio3_p1">Medium</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio4_p1" name="customRadio_p1" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio4_p1">Hard</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio5_p1" name="customRadio_p1" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio5_p1">Very Hard</label>
                                        </div>
                                    </div>
                                    <div className="input-group mt-3">
                                        <input type="text" className="form-control" placeholder="Enter Flag" aria-label="Enter Flag" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button id="submit_p1" className="btn btn-outline-secondary" type="button">Go!</button>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card category_reversing">
                            <div className="card-header" data-target="#problem_id_2" data-toggle="collapse" aria-expanded="false" aria-controls="problem_id_2">
                                Find The Easy Pass <span className="badge align-self-end">80 points</span>
                            </div>
                            <div id="problem_id_2" className="collapse card-body">
                                <blockquote className="card-blockquote">
                                    <div style={{display: "flex;"}}>
                                        <h6 className="solvers">Solvers: <span className="solver_num">76</span> &nbsp;<span className="color_danger">Difficulty:</span></h6>
                                        <div className="pl-2"><canvas style={{width:"80px",height:"20px"}} id="problem_id_2_chart"></canvas></div>
                                    </div>
                                    <p> Can you find the password? Enter the password as flag in the following form: lakshya_CTF password here
                                    </p>
                                    <a target="_blank" href="#!" className="btn btn-outline-secondary btn-shadow"><span className="fa fa-download mr-2"></span>Download</a>
                                    <a href="#hint" data-toggle="modal" data-target="#hint" className="btn btn-outline-secondary btn-shadow"><span className="far fa-lightbulb mr-2"></span>Hint</a>
                                    <div className="input-group mt-3">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1_p2" name="customRadio_p2" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio1_p2" aria-required="">Very Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio2_p2" name="customRadio_p2" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio2_p2">Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio3_p2" name="customRadio_p2" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio3_p2">Medium</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio4_p2" name="customRadio_p2" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio4_p2">Hard</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio5_p2" name="customRadio_p2" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio5_p2">Very Hard</label>
                                        </div>
                                    </div>
                                    <div className="input-group mt-3">
                                        <input type="text" className="form-control" placeholder="Enter Flag" aria-label="Enter Flag" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button id="submit_p2" className="btn btn-outline-secondary" type="button">Go!</button>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card category_pwning">
                            <div className="card-header" data-target="#problem_id_3" data-toggle="collapse" aria-expanded="false" aria-controls="problem_id_3">
                                Impossible Password <span className="badge align-self-end">80 points</span>
                            </div>
                            <div id="problem_id_3" className="collapse card-body">
                                <blockquote className="card-blockquote">
                                    <div style={{display: "flex;"}}>
                                        <h6 className="solvers">Solvers: <span className="solver_num">76</span> &nbsp;<span className="color_danger">Difficulty:</span></h6>
                                        <div className="pl-2"><canvas style={{width:"80px",height:"20px"}} id="problem_id_3_chart"></canvas></div>
                                    </div>
                                    <p> Can you find the password? Enter the password as flag in the following form: lakshya_CTF password here
                                    </p>
                                    <a target="_blank" href="#!" className="btn btn-outline-secondary btn-shadow"><span className="fa fa-download mr-2"></span>Download</a>
                                    <a href="#hint" data-toggle="modal" data-target="#hint" className="btn btn-outline-secondary btn-shadow"><span className="far fa-lightbulb mr-2"></span>Hint</a>
                                    <div className="input-group mt-3">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1_p3" name="customRadio_p3" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio1_p3" aria-required="">Very Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio2_p3" name="customRadio_p3" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio2_p3">Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio3_p3" name="customRadio_p3" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio3_p3">Medium</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio4_p3" name="customRadio_p3" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio4_p3">Hard</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio5_p3" name="customRadio_p3" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio5_p3">Very Hard</label>
                                        </div>
                                    </div>
                                    <div className="input-group mt-3">
                                        <input type="text" className="form-control" placeholder="Enter Flag" aria-label="Enter Flag" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button id="submit_p3" className="btn btn-outline-secondary" type="button">Go!</button>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="card category_misc">
                            <div className="card-header" data-target="#problem_id_4" data-toggle="collapse" aria-expanded="false" aria-controls="problem_id_4">
                                Find The Secret Flag <span className="badge align-self-end">80 points</span>
                            </div>
                            <div id="problem_id_4" className="collapse card-body">
                                <blockquote className="card-blockquote">
                                    <div style={{display: "flex;"}}>
                                        <h6 className="solvers">Solvers: <span className="solver_num">76</span> &nbsp;<span className="color_danger">Difficulty:</span></h6>
                                        <div className="pl-2"><canvas style={{width:"80px",height:"20px"}} id="problem_id_4_chart"></canvas></div>
                                    </div>
                                    <p> Can you find the password? Enter the password as flag in the following form: lakshya_CTF password here
                                    </p>
                                    <a target="_blank" href="#!" className="btn btn-outline-secondary btn-shadow"><span className="fa fa-download mr-2"></span>Download</a>
                                    <a href="#hint" data-toggle="modal" data-target="#hint" className="btn btn-outline-secondary btn-shadow"><span className="far fa-lightbulb mr-2"></span>Hint</a>
                                    <div className="input-group mt-3">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1_p4" name="customRadio_p4" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio1_p4" aria-required="">Very Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio2_p4" name="customRadio_p4" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio2_p4">Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio3_p4" name="customRadio_p4" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio3_p4">Medium</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio4_p4" name="customRadio_p4" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio4_p4">Hard</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio5_p4" name="customRadio_p4" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio5_p4">Very Hard</label>
                                        </div>
                                    </div>
                                    <div className="input-group mt-3">
                                        <input type="text" className="form-control" placeholder="Enter Flag" aria-label="Enter Flag" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button id="submit_p4" className="btn btn-outline-secondary" type="button">Go!</button>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="card category_steg">
                            <div className="card-header" data-target="#problem_id_5" data-toggle="collapse" aria-expanded="false" aria-controls="problem_id_5">
                                DSYM <span className="badge align-self-end">80 points</span>
                            </div>
                            <div id="problem_id_5" className="collapse card-body">
                                <blockquote className="card-blockquote">
                                    <div style={{display: "flex;"}}>
                                        <h6 className="solvers">Solvers: <span className="solver_num">76</span> &nbsp;<span className="color_danger">Difficulty:</span></h6>
                                        <div className="pl-2"><canvas style={{width:"80px",height:"20px"}} id="problem_id_5_chart"></canvas></div>
                                    </div>
                                    <p> Can you find the password? Enter the password as flag in the following form: lakshya_CTF password here
                                    </p>
                                    <a target="_blank" href="#!" className="btn btn-outline-secondary btn-shadow"><span className="fa fa-download mr-2"></span>Download</a>
                                    <a href="#hint" data-toggle="modal" data-target="#hint" className="btn btn-outline-secondary btn-shadow"><span className="far fa-lightbulb mr-2"></span>Hint</a>
                                    <div className="input-group mt-3">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1_p5" name="customRadio_p5" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio1_p5" aria-required="">Very Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio2_p5" name="customRadio_p5" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio2_p5">Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio3_p5" name="customRadio_p5" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio3_p5">Medium</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio4_p5" name="customRadio_p5" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio4_p5">Hard</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio5_p5" name="customRadio_p5" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio5_p5">Very Hard</label>
                                        </div>
                                    </div>
                                    <div className="input-group mt-3">
                                        <input type="text" className="form-control" placeholder="Enter Flag" aria-label="Enter Flag" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button id="submit_5p" className="btn btn-outline-secondary" type="button">Go!</button>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="card category_crypt">
                            <div className="card-header" data-target="#problem_id_6" data-toggle="collapse" aria-expanded="false" aria-controls="problem_id_6">
                                Headache <span className="badge align-self-end">80 points</span>
                            </div>
                            <div id="problem_id_6" className="collapse card-body">
                                <blockquote className="card-blockquote">
                                    <div style={{display: "flex;"}}>
                                        <h6 className="solvers">Solvers: <span className="solver_num">76</span> &nbsp;<span className="color_danger">Difficulty:</span></h6>
                                        <div className="pl-2"><canvas style={{width:"80px",height:"20px"}} id="problem_id_6_chart"></canvas></div>
                                    </div>
                                    <p> Can you find the password? Enter the password as flag in the following form: lakshya_CTF password here
                                    </p>
                                    <a target="_blank" href="#!" className="btn btn-outline-secondary btn-shadow"><span className="fa fa-download mr-2"></span>Download</a>
                                    <a href="#hint" data-toggle="modal" data-target="#hint" className="btn btn-outline-secondary btn-shadow"><span className="far fa-lightbulb mr-2"></span>Hint</a>
                                    <div className="input-group mt-3">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1_p6" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio1_p6" aria-required="">Very Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio2_p6" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio2_p6">Easy</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio3_p6" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio3_p6">Medium</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio4_p6" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio4_p6">Hard</label>
                                        </div>
                                        <div className="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio5_p6" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio5_p6">Very Hard</label>
                                        </div>
                                    </div>
                                    <div className="input-group mt-3">
                                        <input type="text" className="form-control" placeholder="Enter Flag" aria-label="Enter Flag" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button id="submit_p6" className="btn btn-outline-secondary" type="button">Go!</button>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row hackerFont justify-content-center mt-5">
                    <div className="col-md-12">
                        <h4>Machines</h4>
                    </div>
                    {
                        check()?Object.keys(data).map((key) => {
                            return(
                                <div key={key} className="col-md-12 mb-3">
                                    <div className="card category_machine">
                                        <a onClick={()=> navigator(routes.App.machine + key)} href="#" className="color_white">
                                            <div className="card-header">
                                                {data[key].name} <span className=" ml-4 badge align-self-end">{data[key].point} points</span>
                                                <div className="pl-4 machine" style={{display: "inline-flex"}}>
                                                    {data[key].ip}
                                                    <h6 className=" pl-4 pt-1 solvers">Solvers: <span className="solver_num">7{data[key].solved}</span> &nbsp;<span className="color_danger">Difficulty:  {difficulty(data[key].diffculty)}</span></h6>
                                                    <div className="pl-2"><canvas style={{width:"80px",height:"20px"}} id="problem_id_7_chart"></canvas></div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        }):""
                    }
                </div>
                <div className="row hackerFont justify-content-center mt-5">
                    <div className="col-md-12">
                       Challenge Types:
                        <span className="p-1" style={{backgroundColor: "#ef121b94"}}>Web</span>
                        <span className="p-1" style={{backgroundColor: "#17b06b94"}}>Reversing</span>
                        <span className="p-1" style={{backgroundColor: "#f9751594"}}>Steganography</span>
                        <span className="p-1" style={{backgroundColor: "#36a2eb94"}}>Pwning</span>
                        <span className="p-1" style={{backgroundColor: "#9966FF94"}}>Cryptography</span>
                        <span className="p-1" style={{backgroundColor: "#ffce5694"}}>Other</span>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="hint" tabIndex="-1" role="dialog" aria-labelledby="hint label" style={{display: "none"}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            HINT GOES HERE
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </>
    )
}

export default Quest