import { useEffect } from "react";
import { useState } from "react"
import {machine} from '../../../api/app'
import { useParams } from "react-router-dom";
// import { machine1 } from "../../../js/machine";

function Machine(){
    const {id} = useParams()
    const [data,setData] = useState(null);

    useEffect(()=>{
        setData(machine(id));
        // machine1()
    },[]);

    function check(){
        if(data !== null){
            console.log(data);
            return true
        }
        return false
    }

    function difficulty(number){
        if(number >= 9){
            return "insane"
        }
        else if(number >= 7){
            return "hard"
        }
        else if(number >= 5){
            return "middle"
        }
        else if(number >= 3){
            return "easy"
        }
        else{
            return "very easy"
        }
    }
    return(
        <>
            <div class="jumbotron bg-transparent mb-0 pt-0 radius-0">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12  text-center">
                            <h1 class="display-1 bold color_white content__title">{check()?data.name:""}<span class="vim-caret">&nbsp;</span></h1>
                            <p class="text-grey text-spacey hackerFont lead mb-5">
                                Some random info about the machine if any. Some random info about the machine if any.
                            </p>
                        </div>
                    </div>
                    <div class="row hackerFont">
                    </div>
                    <h4>Machine info</h4>
                    <div class="row mt-5">
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <div class="card border-primary mb-3 text-center">
                                    <div class="card-body">

                                        <h4>Machine IP: {check()?data.ip:""}</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card border-primary mb-3 text-center">
                                    <div class="card-body">

                                        <h4>Base Points: {check()?data.point:""}</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card border-primary mb-3 text-center">
                                    <div class="card-body machine_page justify-content-center" style={{display: "inline-flex"}}>
                                        <h6 class="solvers">Solvers: <span class="solver_num">{check()?data.solved:""}</span> &nbsp;<span class="color_danger">Difficulty: {check()?difficulty(data.difficulty):""}</span></h6>
                                        <div class="pl-2"><canvas style={{width:"80px;",height:"15px"}} id="machine_id_1_chart"></canvas></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <div class="card border-primary mb-3 text-center">
                                    <div class="card-body">
                                        <canvas id="machineChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card border-primary mb-3 text-center">
                                <div class="card-body">
                                    <h4>Rate the challenge</h4>
                                    <div class="row input-group mt-3 justify-content-center">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio1_p1" name="customRadio_p1" class="custom-control-input"/>
                                            <label class="custom-control-label" for="customRadio1_p1" checked>Very Easy</label>
                                        </div>
                                        <div class="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio2_p1" name="customRadio_p1" class="custom-control-input"/>
                                            <label class="custom-control-label" for="customRadio2_p1">Easy</label>
                                        </div>
                                        <div class="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio3_p1" name="customRadio_p1" class="custom-control-input"/>
                                            <label class="custom-control-label" for="customRadio3_p1">Medium</label>
                                        </div>
                                        <div class="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio4_p1" name="customRadio_p1" class="custom-control-input"/>
                                            <label class="custom-control-label" for="customRadio4_p1">Hard</label>
                                        </div>
                                        <div class="ht-tm-element custom-control custom-radio">
                                            <input type="radio" id="customRadio5_p1" name="customRadio_p1" class="custom-control-input"/>
                                            <label class="custom-control-label" for="customRadio5_p1">Very Hard</label>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center pb-3">
                                        <div class="input-group mt-3 col-md-6">
                                            <input type="text" class="form-control" placeholder="Enter Flag" aria-label="Enter Flag" aria-describedby="basic-addon2"/>
                                            <div class="input-group-append">
                                                <button id="submit_p1" class="btn btn-outline-secondary" type="button">Go!</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="hint" tabindex="-1" role="dialog" aria-labelledby="hint label" style={{display: "none"}} aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                HINT GOES HERE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Machine