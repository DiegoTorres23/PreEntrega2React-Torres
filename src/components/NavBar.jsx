import CartWidget from "./CartWidget"
import logo from "../assets/images/DIGITAL SOUND.png"
import {Link, NavLink} from 'react-router-dom'

const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navBarStyle">
            <div className="container-fluid">
                <Link className="navbar-brand navBarTitle" to={"/"} activeclassname="active"><img src={logo} alt="img-logo" width={330} height={80}/></Link>
                <button className="navbar-toggler btnNavBar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse deployList" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown liNavStyle">
                        <Link className="dropdown-toggle navBarText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Equipos
                        </Link>
                        <ul className="dropdown-menu listStyle">
                        <li><NavLink className="dropdown-item textListStyle" to={"/category/SonidoPortatil"}>Sonido Portatil</NavLink></li>
                        <li><hr className="dropdown-divider dividerStyle" /></li>
                        <li><NavLink className="dropdown-item textListStyle" to={"/category/SonidoDeCasa"}>Sonido de Casa</NavLink></li>
                        <li><hr className="dropdown-divider dividerStyle" /></li>
                        <li><NavLink className="dropdown-item textListStyle" to={"category/CarAudio"}>Car Audio</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="dropdown-toggle navBarText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Auriculares
                        </Link>
                        <ul className="dropdown-menu listStyle">
                        <li><NavLink className="dropdown-item textListStyle" to={"/category/AuricularesInEar"}>Auriculares In Ear</NavLink></li>
                        <li><hr className="dropdown-divider dividerStyle" /></li>
                        <li><NavLink className="dropdown-item textListStyle" to={"/category/AuricularesOnEar"}>Auriculares On Ear</NavLink></li>
                        </ul>
                    </li>
                    </ul>
                    <div className="col d-flex align-items-center justify-content-end">
                            <CartWidget />
                    </div>
                </div>
            </div>
      </nav>
    )
}

export default NavBar;