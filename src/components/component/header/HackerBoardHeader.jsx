import HeaderNav from "./component/HeaderNav"
import HeaderGlitchLayout from './component/HeaderGlitchLayout';

function HackerBoardHeader(){
    return (
        <>
            <HeaderGlitchLayout classname="glitch__img glitch__img_leaderboard" />
            <HeaderNav />
        </>
    )
}

export default HackerBoardHeader