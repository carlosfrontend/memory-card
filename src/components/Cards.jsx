import '../styles/Cards.css';
import Card from './Card';

export default function Cards({characters}) {
    return (
        <div className="cards-container">
        <main className="cards">
           {characters.map(character => <Card key={character.id} name={character.name} imageUrl={character.imageUrl} id={character.id} />)}
        </main>
        </div>
    )
}