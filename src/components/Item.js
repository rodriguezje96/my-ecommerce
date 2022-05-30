export const Item = ({ item }) => {
    return (
        <div>
            <div class="card container">
                <img class="card-img-top" src={item.img} alt="imagen de producto"></img>
                <div class="card-body">
                    <h5 class="card-title">{item.nombre}</h5>
                    <p class="card-text">Precio: {item.precio}</p>
                    <a href="#" class="btn btn-dark">Sumar al carrito</a>
                </div>
            </div>
        </div>

    )


}