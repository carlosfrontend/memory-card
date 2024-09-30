import '../styles/Card.css';

export default function Card({name, imageUrl}) {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />
             <span>{name}</span>
        </div>
    )
}