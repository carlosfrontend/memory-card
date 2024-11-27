import gitHubLogo from '../assets/GitHub_Logo.png';
import '../styles/Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>

            <div className="profile-logos">
                <a href="https://www.linkedin.com/in/carlosfrontend" target='_blank' referrerPolicy='no-referrer'><i className="devicon-linkedin-plain-wordmark colored"></i></a>
                <a href="https://github.com/carlosfrontend" target='_blank' referrerPolicy='no-referrer'><i className="devicon-github-original-wordmark colored"></i>
                </a>
                <a href="https://x.com/CarlosFrontEnd" target='_blank' referrerPolicy='no-referrer'> <i className="devicon-twitter-original colored"></i>
                </a>
            </div>
            <div className="created-container">
                <strong className="created">Created with with</strong>
                <a href="https://vitejs.dev/" target='_blank' referrerPolicy='no-referrer'><img className='vite-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a>
                <a href="https://react.dev/" target='blank'><img className='react-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" /></a>

            </div>
            <div className="name-container">
                <span>Coded by @carlosfrontend {" "}</span><strong>{year}{" "}&copy;</strong>
            </div>
        </footer>
    )

}