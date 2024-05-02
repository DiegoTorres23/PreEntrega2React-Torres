import { Link } from "react-router-dom";

const Error404=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    <h1>Error 404</h1>
                    <h2>Pagina no Encontrada✖️</h2>
                    <h3>Por Favor Verifica la URL.</h3>
                    <button className="btn bg-black rounded-2 mt-2"><Link className="text-decoration-none text-white" rel="stylesheet" to={"/"}>Volver al Inicio</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Error404;