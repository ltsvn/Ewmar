export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
                <div className="preloader">
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>
                                <span data-text-preloader="W" className="letters-loading">
                                    W
                                </span>
                                <span data-text-preloader="M" className="letters-loading">
                                    M
                                </span>
                                <span data-text-preloader="A" className="letters-loading">
                                    A
                                </span>
                                <span data-text-preloader="R" className="letters-loading">
                                    R
                                </span>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
}
