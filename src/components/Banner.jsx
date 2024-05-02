import img1 from "../../public/images/001_Waveflex_desk.jpg"
import img2 from "../../public/images/Auris-On.jpg"
import img3 from "../../public/images/onix-nueva.jpg"
import img4 from "../../public/images/HK-nueva.png"
import img5 from "../../public/images/JBL-LAND.png"

const Banner =()=>{
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                <img src={img1} className="d-block w-100" alt="img-banner" />
                </div>
                <div className="carousel-item active" data-bs-interval="5000">
                <img src={img2} className="d-block w-100" alt="img-banner" />
                </div>
                <div className="carousel-item active" data-bs-interval="5000">
                <img src={img3} className="d-block w-100" alt="img-banner" />
                </div>
                <div className="carousel-item active" data-bs-interval="5000">
                <img src={img4} className="d-block w-100" alt="img-banner" />
                </div>
                <div className="carousel-item active" data-bs-interval="5000">
                <img src={img5} className="d-block w-100" alt="img-banner" />
                </div>
            </div>
        </div>
    )
}

export default Banner;