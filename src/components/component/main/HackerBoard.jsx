import { useEffect, useState } from "react"
import {hackerRank} from '../../../api/app'

function Hackerboard(){

    const [data,setData] = useState(null);
    
    useEffect(() => {
        setData(hackerRank());
    },[])

    function check(){
        if(data !== null){
            return true
        }
        else{
            return false
        }
    }

    function ToTimeConvertor(time){
        let hour = Math.floor(time / 3600);
        time = time % 3600;
        let minute = Math.floor(time / 60);
        let second = time % 60;
        hour = hour >= 10 ? hour : "0" + hour;
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return hour + ":" + minute + ":" + second
        
    }

    return (
        <>
            <div className="jumbotron bg-transparent mb-0 pt-3 radius-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1 className="display-1 bold color_white content__title text-center"><span className="color_danger">HACKER</span>BOARD<span className="vim-caret">&nbsp;</span></h1>
                            <p className="text-grey lead text-spacey text-center hackerFont">
                                Where the world get's ranked!
                            </p>
                            <div className="row justify-content-center my-5">
                                <div className="col-xl-10">
                                    <canvas id="myChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5  justify-content-center">
                        <div className="col-xl-10">
                            <table className="table table-hover table-striped">
                                <thead className="thead-dark hackerFont">
                                    <tr>
                                        <th>#</th>
                                        <th>Team Name</th>
                                        <th># Challenges Solved</th>
                                        <th>Total Time Taken</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {check()?Object.keys(data).map((key) => {
                                        return (
                                            <tr id={key}>
                                                <th scope="row">{key}</th>
                                                <td>{data[key].name}</td>
                                                <td>{data[key].solvedChallange}</td>
                                                <td>{ToTimeConvertor(data[key].timeTake)}</td>
                                                <td>{data[key].score}</td>
                                            </tr>
                                        )
                                    }):""}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hackerboard