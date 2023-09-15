import { PlayIcon } from '../../assets/icons/Icons';
import { Link } from 'react-router-dom';

import IMDbLogo from '../../assets/IMDb.png';
import TomatoeLogo from '../../assets/tomatoe.png';
import HeadlineImage from '../../assets/poster.svg';

import './Headline.scss';

const Headline = () => {
  return (
    <section
      className="headline"
      style={{
        backgroundImage: `url(${HeadlineImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="headline-content">
        <h1>John Wick 3 : Parabellum</h1>
        <div className="ratting">
          <span>
            <img src={IMDbLogo} alt="IMDb logo" />
            <span>86.0 / 100</span>
          </span>
          <span>
            <img src={TomatoeLogo} alt="IMDb logo" />
            <span>97%</span>
          </span>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

        <Link to="#">
          <PlayIcon />
          Watch trailer
        </Link>
      </div>

      <div className="headline-nav">
        <ul>
          <li>
            <Link aria-label="headline 1">
              <div /> 1
            </Link>
          </li>
          <li>
            <Link aria-label="headline 2">
              <div /> 2
            </Link>
          </li>
          <li>
            <Link aria-label="headline 3">
              <div /> 3
            </Link>
          </li>
          <li>
            <Link aria-label="headline 4">
              <div /> 4
            </Link>
          </li>
          <li>
            <Link aria-label="headline 5">
              <div /> 5
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Headline;
