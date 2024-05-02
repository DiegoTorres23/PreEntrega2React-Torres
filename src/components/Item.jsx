import { Link } from "react-router-dom";

const Item=({item})=>{
    return(
        <div className="col-md-3 tex-center">
            <Link className="text-decoration-none" to={`/item/${item.id}`}>
                <div className="card border-0 tex-center p-3">
                    <img src={item.image} className="img-fluid" alt={item.title} />
                    <div className="card-body">
                        <h3 className="card-text">{item.title}</h3>
                        <p className="card-text"><b>Precio: ${item.price}</b> </p>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Item;