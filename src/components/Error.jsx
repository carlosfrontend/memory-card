import errorLogo from '../assets/alert-outline.svg';
import '../styles/Error.css';

export default function Error({myError}) {
    return (
        <div className="error-box">
            <img src={errorLogo} alt="warning logo" />
            <div className="text-box">
                <p>We are sorry!, Please try again later...</p>
                <p>{myError}</p>
            </div>
        </div>
    )
}