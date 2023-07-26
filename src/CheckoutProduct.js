import "./CheckoutProduct.css";
import StarRateIcon from '@mui/icons-material/StarRate';

function CheckoutProduct({ id, title, image, price, rating }) {
    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
        
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p checkoutProduct__price>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    <p>
                        <StarRateIcon />
                    </p>
                </div>
                <button>Remove From Basket</button>
            </div>
        
        
        </div>
    );
};
export default CheckoutProduct;