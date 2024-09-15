function Index(){
    return (
        <>
            <div class="jumbotron bg-transparent mb-0 pt-3 radius-0">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8">
                            <h1 class="display-1 bold color_white content__title">LAKSHYA CTF<span class="vim-caret">&nbsp;</span></h1>
                            <h1 class="display-1 bold color_white content__title2">INC 2020</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4">
                            <p class="mt-5 text-grey text-spacey hackerFont lead">
                                The quieter you become the more you are able to hear.
                            </p>
                            <button class="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left typewriter" onclick="(function(){window.location.href='login.html'})();">
                                <h4>Login</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index