import "./Product.css";
import StarRateIcon from '@mui/icons-material/StarRate';

function Product({ id,  title, price, image, rating }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD TO BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarRateIcon />
                    ))}
                </div>
                <img 
                    className="product__img"
                    src={image}
                    alt="kettle_bell"
                />
                <button className="product__button">Add to Basket</button>
            </div>
        </div>
    );
};
export default Product;