import MainApp from "../components/MainApp"

function AppHeader(){
    return (
        <>
            <div className="navbar-dark text-white">
                <div className="container">
                    <nav clclassNameass="navbar px-0 navbar-expand-lg navbar-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a href="index.html" className="pl-md-0 p-3 text-light">Start</a>
                                <a href="app.html" className="p-3 text-decoration-none text-light">App example</a>
                                <a href="form.html" className="p-3 text-decoration-none text-light">Form example</a>
                            </div>
                        </div>
                    </nav>  

                </div>
            </div>
        </>
    )
}

export default AppHeader