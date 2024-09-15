function NotFound(){
    const internalMain = {
        backgroundColor: "#000000A4"
    }
    return (
        <>
            <div className="jumbotron bg-transparent mb-0 pt-5 radius-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <h1 style={internalMain} className="py-5 display-1 bold color_white content__title">
                                404 N07 F0UND
                                <span className="vim-caret">
                                    &nbsp;
                                </span>
                                </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound