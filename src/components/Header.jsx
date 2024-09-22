import { useLocation, Link } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import MenuTwo from '../components/menu/MenuTwo';
import logo from './../files/image/logo.png';
import '../style/style.css';

const Header = () => {
  const location = useLocation();
  //console.log(location.pathname);

  return (
    <div className="region-header">
      <div className="logo-nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Логотип" width="100" height="100" />
          </Link>
        </div>
        <div className="nav-menu">
          <Menu />
          {location.pathname.includes('poleznoe') ? <MenuTwo /> : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
