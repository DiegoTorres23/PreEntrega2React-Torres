import CartWidget from "./CartWidget"
import logo from "../assets/images/DIGITAL SOUND.png"
import {Link, NavLink} from 'react-router-dom'

const NavBar=()=>{
    return(
            <nav className="navbar navbar-expand-lg navBarStyle">
                <div className="container-fluid">
                    <Link className="navbar-brand navBarTitle" to={"/"} activeclassname="active"><img src={logo} alt="img-logo" width={330} height={80}/></Link>
                    <button className="btnR navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="containerNav collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li className="nav-item dropdown liNavStyle">
                                <Link className="nav-link liNavStyle dropdown-toggle navBarText" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Equipos
                            </Link>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={"/category/SonidoPortatil"}>Sonido Portatil</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to={"/category/SonidoDeCasa"} >Sonido de Casa</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to={"/category/CarAudio"}>Car Audio</NavLink></li>
                            </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle navBarText navBarText" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                 Auriculares
                            </Link>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={"/category/AuricularesInEar"} activeclassname="active">In-Ear</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item"  to={"/category/AuricularesOnEar"} activeclassname="active">On-Ear</NavLink></li>

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