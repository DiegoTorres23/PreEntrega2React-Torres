import ItemCount from "./ItemCount";


const ItemDetail= ({item})=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-5">
                    <h1 className="display-5 text-uppercase">{item.title}</h1>
                    <br />
                    <p>{item.description}</p>
                    <p className="detailPrice"><b>Precio: ${item.price}</b></p>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;