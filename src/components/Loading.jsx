const Loading= () =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center loadingStyle">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;