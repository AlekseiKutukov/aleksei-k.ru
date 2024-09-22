import { NavLink } from 'react-router-dom';

const MenuTwo = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="menu-two">
      <NavLink
        style={({ isActive }) => (isActive ? { color: 'lightyellow' } : {})}
        to="."
        end
      ></NavLink>
      <NavLink to="poleznoe/vs">VS</NavLink>
      <NavLink to="poleznoe/ssilki">Ссылки</NavLink>
      <NavLink to="poleznoe/primeri">Примеры</NavLink>
    </nav>
  );
};

export default MenuTwo;
