function Header(){
    return (
        <>
            <div class="navbar-dark text-white">
                <div class="container">
                    <nav class="navbar px-0 py-0 navbar-expand-lg navbar-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a href="index.html" class="pl-md-0 p-3 text-decoration-none text-light">
                                    <h3 class="bold"><span class="color_danger">LAKSHYA</span><span class="color_white">CTF</span></h3>
                                </a>
                            </div>
                            <div class="navbar-nav ml-auto">
                                <a href="index.html" class="p-3 text-decoration-none text-light bold">Home</a>
                                <a href="about.html" class="p-3 text-decoration-none text-light bold">About</a>
                                <a href="hackerboard.html" class="p-3 text-decoration-none text-light bold">Hackerboard</a>
                                <a href="quests.html" class="p-3 text-decoration-none text-white bold">Challenges</a>
                                <a href="#" class="p-3 text-decoration-none text-light bold">Logout</a>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Header