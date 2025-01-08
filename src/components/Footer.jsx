import "../styles/Footer.css";
import { ViteLogo } from "./logos/ViteLogo";
import { ReactLogo } from "./logos/ReactLogo";
import { LinkedinLogo } from "./logos/LinkedinLogo";
import { GithubLogo } from "./logos/GithubLogo";
import { XLogo } from "./logos/XLogo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="profile-logos">
        <a
          className="social-link"
          href="https://www.linkedin.com/in/carlosfrontend"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <LinkedinLogo />
        </a>
        <a
          className="social-link"
          href="https://github.com/carlosfrontend"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <GithubLogo />
        </a>
        <a
          className="social-link"
          href="https://x.com/CarlosFrontEnd"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {" "}
          <XLogo />
        </a>
      </div>
      <div className="created-container">
        <strong className="created">Created with with</strong>
        <a
          className="technology-link"
          href="https://vitejs.dev/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <ViteLogo />
        </a>
        <a className="technology-link" href="https://react.dev/" target="blank">
          <ReactLogo />
        </a>
      </div>
      <div className="name-container">
        <span>Coded by </span>
        <strong>@carlosfrontend {year} &copy;</strong>
      </div>
    </footer>
  );
}
