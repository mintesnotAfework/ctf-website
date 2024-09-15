import { useEffect } from "react"


function Hackerboard(){

    return (
        <>
            <div class="jumbotron bg-transparent mb-0 pt-3 radius-0">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <h1 class="display-1 bold color_white content__title text-center"><span class="color_danger">HACKER</span>BOARD<span class="vim-caret">&nbsp;</span></h1>
                            <p class="text-grey lead text-spacey text-center hackerFont">
                                Where the world get's ranked!
                            </p>
                            <div class="row justify-content-center my-5">
                                <div class="col-xl-10">
                                    <canvas id="myChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5  justify-content-center">
                        <div class="col-xl-10">
                            <table class="table table-hover table-striped">
                                <thead class="thead-dark hackerFont">
                                    <tr>
                                        <th>#</th>
                                        <th>Team Name</th>
                                        <th># Challenges Solved</th>
                                        <th>Total Time Taken</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>liveoverflow</td>
                                        <td>8</td>
                                        <td>42:59</td>
                                        <td>2540</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>CR007</td>
                                        <td>6</td>
                                        <td>44:59</td>
                                        <td>1900</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>anonymous</td>
                                        <td>4</td>
                                        <td>40:00</td>
                                        <td>650</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>ashawe</td>
                                        <td>5</td>
                                        <td>40:10</td>
                                        <td>550</td>
                                    </tr>
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