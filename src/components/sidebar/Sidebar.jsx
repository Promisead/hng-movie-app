import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/tv.svg';
import HomeIcon from '../../assets/Home.svg';
import SeriesIcon from '../../assets/TV.svg';
import MoviesIcon from '../../assets/Movie.svg';
import LogoutIcon from '../../assets/Logout.svg';
import UpcomingIcon from '../../assets/Calendar.svg';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="movie-sidebar">
      <Link to="/" aria-label="home">
        <img src={Logo} alt="logo" />
        <span>MovieBox</span>
      </Link>

      <ul>
        <li>
          <NavLink to="/" aria-label="Home">
            <img src={HomeIcon} alt="Home Icon" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/movie" aria-label="Movies">
            <img src={MoviesIcon} alt="Movies Icon" />
            <span>Movie</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" aria-label="TV Series">
            <img src={SeriesIcon} alt="TV Icon" />
            <span>TV Series</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" aria-label="Upcoming">
            <img src={UpcomingIcon} alt="Upcoming Icon" />
            <span>Upcoming</span>
          </NavLink>
        </li>
      </ul>

      <div>
        <h4>Play movie quizes and earn free tickets</h4>
        <p>50k people are playing now</p>

        <Link to="#">Start playing</Link>
      </div>

      <button type="button" aria-label="Log out">
        <img src={LogoutIcon} alt="Logout Icon" />
        <span>Log out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
