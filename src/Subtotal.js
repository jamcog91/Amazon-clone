import React from "react";
import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return(
        <div className="subtotal">
            {/* <CurrencyFormat 
                renderText={(value) => { */}
                    <>
                        <p>
                            Subtotal (0 items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" className="gift__checkbox" />This order contains a gift
                        </small>
                    </>
                {/* }}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
            /> */}

            <button className="checkout__button">Proceed to Checkout</button>
        </div>
    );
};
export default Subtotal;