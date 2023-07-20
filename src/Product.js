import "./Product.css";

function Product() {
    return(
        <div className="product">
            <div className="product__info">
                <p>Amazon Basic Cast Iron Kettlebell</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>35.95</strong>
                </p>
                <div className="product__rating">
                    <p>stars</p>
                </div>
                <img 
                    className="product__img"
                    src="https://images-na.ssl-images-amazon.com/images/I/81bRHNpK3fL._AC_UL232_SR232,232_.jpg"
                    alt="kettle_bell"
                />
            </div>
            <button>Add to Basket</button>
        </div>
    );
};
export default Product;