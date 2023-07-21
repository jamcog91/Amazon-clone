import "./Home.css";
import Product from "./Product";

function Home() {
    return(
        <div className="home">
            <div className="home_container">
                <img 
                    className="home__img"
                    src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/a/AmazonStores/ATVPDKIKX0DER/7a5f6ce2fdbd715196440d05e2f0b1d0.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg"
                    alt="amazon__background"
                />
                <div className="home__row"> 
                    {/* {product} */}
                    <Product 
                        title="Amazon Basic Cast Iron Kettlebell"
                        price={35.95}
                        image='https://images-na.ssl-images-amazon.com/images/I/81bRHNpK3fL._AC_UL232_SR232,232_.jpg'
                        rating={5}
                    />
                    <Product 
                        title="Amazon Basic Barbell Adjustable Lifting Dumbbells Weight Set"
                        price={89.99}
                        image='https://cdn.shopify.com/s/files/1/0575/5401/0306/t/15/assets/acf.Adjustable-Dumbbell-Pair-Main.png?v=1635535324'
                        rating={4}
                    />
                </div>
                <div className="home__row"> 
                    {/* {product} */}
                    <Product 
                        title="Amazon Basic 1/2-Inch Extra Thick Exercise Yoga Mat"
                        price={23.95}
                        image='https://m.media-amazon.com/images/I/81chpv2CQLL._AC_UF1000,1000_QL80_.jpg'
                        rating={4}/>
                    <Product 
                        title="Amazon Basic Medicine Ball For Workouts Exercise Balance Training"
                        price={41.63}
                        image='https://nwscdn.com/media/catalog/product/m/e/medicine-ball-10kg.jpg'
                        rating={3}
                    />
                </div>
                <div className="home__row"> 
                    {/* {product} */}
                    <Product 
                        title="Amazon Basics Adujustable Weight Workout Bench"
                        price={69.99}
                        image="https://luspersports.com/cdn/shop/files/6391ace427ade714b70fb966024ae804_600x.jpg?v=1688368986"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
};
export default Home;