import { useEffect, useState } from 'react'
import {about} from '../../../api/information.js'
import { useNavigate } from 'react-router-dom';


function About(){
    const [data,setData] = useState();
    const navigator = useNavigate()

    useEffect(() => {
        setData(about());
    },[]);

    function check(){
        if(data != null){
            return false
        }
        else{
            return true
        }
    }

    return (
        <>
          <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1 className="display-1 bold color_white content__title text-center"><span className="color_danger">ABOUT</span>US<span className="vim-caret">&nbsp;</span></h1>
                            <p className="text-grey text-spacey text-center hackerFont lead">
                                {check()? "" : data.moto}
                            </p>
                            <div className="row justify-content-center hackerFont">
                                <div className="col-md-8">
                                    <h5 className="bold color_white pt-3">
                                        {check()? "" : data.body1.question}
                                    </h5>
                                        {check()? "" : data.body1.answer}
                                    <h5 className="bold color_white pt-3">
                                        {check()? "" : data.body2.question}
                                    </h5>
                                        {check()? "" : data.body2.answer}
                                    <h5 className="bold color_white pt-3">
                                        {check()? "" : data.body3.question}
                                    </h5>
                                        {check()? "" : data.body3.answer}
                                    <div className="row text-center pt-5">
                                        <div className="col-xl-12">
                                            <button onClick={ () => navigator("/")} className="btn btn-outline-danger btn-shadow px-3my-2 ml-0 ml-sm-1 text-left typewriter">
                                                <h4>LET IT RIP!</h4>
                                            </button>
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

export default About