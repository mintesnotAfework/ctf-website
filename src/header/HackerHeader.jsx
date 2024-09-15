function HakcerHeader(){
    return (
        <>
            <div className="glitch">
                <div className="glitch__img"></div>
                <div className="glitch__img"></div>
                <div className="glitch__img"></div>
                <div className="glitch__img"></div>
                <div className="glitch__img"></div>
            </div>
            <div className="navbar-dark text-white">
                <div className="container">
                    <nav className="navbar px-0 navbar-expand-lg navbar-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a href="index.html" className="pl-md-0 p-3 text-decoration-none text-light">
                                    <h3 className="bold"><span className="color_danger">LAKSHYA</span><span className="color_white">CTF</span></h3>
                                </a>
                            </div>
                            <div className="navbar-nav ml-auto">
                                <a href="index.html" className="p-3 text-decoration-none text-white bold">Home</a>
                                <a href="about.html" className="p-3 text-decoration-none text-light bold">About</a>
                                <a href="hackerboard.html" className="p-3 text-decoration-none text-light bold">Hackerboard</a>
                                <a href="login.html" className="p-3 text-decoration-none text-light bold">Login</a>
                                <a href="register.html" className="p-3 text-decoration-none text-light bold">Register</a>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default HackerHeader