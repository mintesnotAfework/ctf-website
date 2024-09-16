import { useEffect, useState } from "react"
import { instruction } from "../../../api/information"; 
import { useNavigate } from "react-router-dom";

function Instruction(){
    const navigator = useNavigate()
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(instruction());
    },[])

    
    function check(){
        if(data != null){
            return true
        }
        else{
            return false
        }
    }
    return (
        <>
             <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1 className="display-1 bold color_white content__title text-center"><span className="color_danger">INSTRUC</span>TIONS<span className="vim-caret">&nbsp</span></h1>
                            <p className="text-grey text-spacey text-center hackerFont lead">
                                {check()? data.moto : ""}
                            </p>
                            <div className="row justify-content-center  hackerFont ">
                                <div className="col-md-10">
                                    <h5 className="bold color_white pt-3">
                                        General Rules and Instructions
                                    </h5>
                                    <ul>
                                        {check()?Object.keys(data.rules.general).map((key) => {
                                            return <li id={key}>{data.rules.general[key]}</li>
                                        }):""}
                                    </ul>
                                    <h5 className="bold color_white pt-3">
                                        Special Rules and Instructions
                                    </h5>
                                    <ul>
                                    {check()?Object.keys(data.rules.special).map((key) => {
                                            return <li id={key}>{data.rules.special[key]}</li>
                                        }):""}
                                    </ul>
                                    <div className="row text-center pt-5">
                                        <div className="col-xl-12">
                                            <button onClick={() => navigator("/")} className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter">
                                                <h4>LET THE HACKING BEGIN!</h4>
                                            </button>
                                            <small id="registerHelp" className="mt-2 form-text text-muted">We expect each and every one of you to comply by the rules. Failure to do so might result in a permanent ban.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instruction