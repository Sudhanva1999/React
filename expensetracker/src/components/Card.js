import './Card.css'

function Card(props) {
    const cardStyles = 'cardWrapper ' + props.className;
    return (
        <div className ={cardStyles} >
            {props.children}
        </div>
    );

}

export default Card;