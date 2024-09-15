function Register(){
    return (
        <>
            <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10">
                            <h1 className="display-1 bold color_white content__title">LAKSHYA CTF<span className="vim-caret">&nbsp;</span></h1>
                            <p className="text-grey text-spacey hackerFont lead mb-5">
                                Join the community and be part of the future of the information security industry.
                            </p>
                            <div className="row  hackerFont">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="reciept_id" placeholder="RecieptId(ex. EINC-5e5a93e4318db)" />
                                        <small id="reciept_id_help" className="form-text text-muted">Don't have reciept id? Register <a target="_blank" href="http://pictinc.org/subevents_register/online/index1.php">here</a></small>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="team_name" placeholder="Team name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="New Password" /> 
                                        <small id="passHelp" className="form-text text-muted">Make sure nobody's behind you</small>
                                    </div>
                                    <div className="custom-control custom-checkbox my-4">
                                        <input type="checkbox" className="custom-control-input" id="solemnly-swear" />
                                        <label className="custom-control-label" for="solemnly-swear">I solemnly swear that I am up to no good.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <button className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter" onclick="window.location.href='login.html';">
                                    <h4>Register</h4>
                            </button>
                            <small id="registerHelp" className="mt-2 form-text text-muted">Already Registered? <a href="login.html">Login here</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register