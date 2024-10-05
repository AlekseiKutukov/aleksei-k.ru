import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <h1>Портфолио</h1>
      <Link to="./react-redux-app-library">
        <div className="cards__example__code" title="Посмотреть пример">
          Библиотека Redux + API
        </div>
      </Link>
    </>
  );
};

export default Portfolio;
