import errorLogo from '../assets/alert-outline.svg';
import '../styles/Error.css';

export default function Error({ errorMessage }) {
    return (
        <div className="error-box">
            <img src={errorLogo} alt="" />
            <div className="text-box">
                <p>We are sorry!, Please try again later...</p>
            </div>
        </div>
    )
}