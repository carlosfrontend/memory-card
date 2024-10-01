import '../styles/Card.css';

export default function Card({name, imageUrl, id,handleClick}) {

    return (
        <div className="card" data-id={id} onClick={handleClick}>
            <img src={imageUrl} alt={name} />
             <span>{name}</span>
        </div>
    )
}