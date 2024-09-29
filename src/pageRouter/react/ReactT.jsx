import { Link } from 'react-router-dom';
import AllHooks from './AllHooks';
import '../../style/react.css';

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
      <div className="all-cards__example__code">
        <Link to="./state-via-props">
          <div className="cards__example__code" title="Посмотреть пример">
            Передача состояния через свойства
          </div>
        </Link>

        <Link to="./iterate-over-an-array-of-objects">
          <div className="cards__example__code" title="Посмотреть пример">
            Итерация по массиву объектов
          </div>
        </Link>

        <Link to="./logical-and-operator">
          <div className="cards__example__code" title="Посмотреть пример">
            Логический оператор И
          </div>
        </Link>
        <Link to="./fragment">
          <div className="cards__example__code" title="Посмотреть пример">
            Реакт фрагмент
          </div>
        </Link>
        <Link to="./login">
          <div className="cards__example__code" title="Посмотреть пример">
            Контролируемые поля
          </div>
        </Link>
        <Link to="./children-prop">
          <div className="cards__example__code" title="Посмотреть пример">
            Children prop
          </div>
        </Link>
        <Link to="./fetch-useefect">
          <div className="cards__example__code" title="Посмотреть пример">
            Fetch и useEfect
          </div>
        </Link>
        <Link to="./array-post-api">
          <div className="cards__example__code" title="Посмотреть пример">
            Массив постов из API
          </div>
        </Link>
      </div>
    </>
  );
};

export default ReactT;
