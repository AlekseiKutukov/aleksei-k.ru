import { NavLink } from 'react-router-dom';
import '../../style/style.css';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? 'Закрыть меню' : 'Открыть меню'}
      </button>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        <NavLink
          style={({ isActive }) => (isActive ? { color: 'lightyellow' } : {})}
          to="."
          end
        >
          Главная
        </NavLink>
        <NavLink to="react">React</NavLink>
        <NavLink to="router">Router</NavLink>
        <NavLink to="redux">Redux</NavLink>
        <NavLink to="npm">NPM</NavLink>
        <NavLink to="git">Git</NavLink>
        <NavLink to="portfolio">Портфолио</NavLink>
        <NavLink to="js">JS</NavLink>
        <NavLink to="poleznoe">Полезное</NavLink>
      </ul>
    </nav>
  );
};

export default Menu;
