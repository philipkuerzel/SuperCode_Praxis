import "./carditem.css"

const CardItem = (props) => {
    return (  
        <>
        <div className="card">
            <img src={props.img} />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <button className="buyBtn">buy now</button>
        </div>
        </>
    );
}
 
export default CardItem;