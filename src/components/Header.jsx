import pokemonLogo from '../assets/pokemon_logo.png';
import '../styles/Header.css';

export default function Header({ text, logoAltText,score, bestScore }) {
    return (
        <header>
            <img src={pokemonLogo} alt={logoAltText} /><h1>{text}</h1>
            <div className="scores">
                <div className="score">
                    <strong>Score: </strong><span>{score}</span>
                </div>
                <div className="score">
                    <strong>Best Score: </strong><span>{bestScore}</span>
                </div>
            </div>
        </header>
    )
}