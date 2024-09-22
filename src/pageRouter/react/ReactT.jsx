import { Link } from 'react-router-dom';
import AllHooks from './AllHooks';

const ReactT = () => {
  return (
    <>
      <div>
        Пока что тут все хуки, в дальнейшем либо разнесу их по библиотекам, либо
        создам вкладку хуки с возможностью сортировки по библиотекам
      </div>
      <div>
        <AllHooks />
      </div>
      <h2>Примеры кода:</h2>

      <Link to="./state-via-props">
        <div className="cards__example__code" title="Посмотреть пример">
          Передача состояния через свойства
        </div>
      </Link>
    </>
  );
};

export default ReactT;
