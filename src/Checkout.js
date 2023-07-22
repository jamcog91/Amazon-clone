import './Checkout.css';

function Checkout() {

    return(
        <div className='checkout'>
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg"
                    alt='Prime Day'
                />

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                </div>
            </div>
        </div>
    );
};
export default Checkout;