import CardItem from "../cardItem/CardItem";
import bild1 from "../../img/bild1.webp"
import bild2 from "../../img/bild2.jpg"
import bild3 from "../../img/bild3.avif"
import "./productCard.css"

const ProductCard = () => {
    return (  
        <>
        <section className="cardBox">
            <CardItem
            img={bild2}
            title="lalala"
            price="1000€"
            />
            <CardItem
            img={bild3}
            title="lalala"
            price="1000€"
            />
            <CardItem
            img={bild1}
            title="lalala"
            price="1000€"
            />
        </section>
        </>
    );
}
 
export default ProductCard;