import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../assets/icons/Icons';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="social">
          <Link to="https://web.facebook.com" target="_blank">
            <FacebookIcon />
          </Link>

          <Link to="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <TwitterIcon />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
            <YoutubeIcon />
          </Link>
        </div>
        <div className="links">
          <Link to="#">Conditions of use</Link>
          <Link to="#">Privacy & Policy</Link>
          <Link to="#">Press Room</Link>
        </div>
        <div className="copyright">© 2023 Movie Discovery App by Promise (Champion) Duke</div>
      </div>
    </footer>
  );
};

export default Footer;
