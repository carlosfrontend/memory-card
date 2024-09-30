import pokemonLogo from '../assets/pokemon_logo.png';
import '../styles/Header.css';

export default function Header({ text, logoAltText }) {
    return (
        <header>
            <img src={pokemonLogo} alt={logoAltText} /><h1>{text}</h1>
            <div className="scores">
                <div className="score">
                    <strong>Score: </strong><span>20</span>
                </div>
                <div className="score">
                    <strong>Best Score: </strong><span>16</span>
                </div>
            </div>
        </header>
    )
}