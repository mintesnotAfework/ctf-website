function Machine(){
    return(
        <>
            <div class="jumbotron bg-transparent mb-0 pt-0 radius-0">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12  text-center">
                            <h1 class="display-1 bold color_white content__title">HEADACHE<span class="vim-caret">&nbsp;</span></h1>
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

                                        <h4>Machine IP: 10.10.11.117</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card border-primary mb-3 text-center">
                                    <div class="card-body">

                                        <h4>Base Points: 80</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card border-primary mb-3 text-center">
                                    <div class="card-body machine_page justify-content-center" style={{display: "inline-flex"}}>
                                        <h6 class="solvers">Solvers: <span class="solver_num">76</span> &nbsp;<span class="color_danger">Difficulty:</span></h6>
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