import { Link } from 'react-router-dom';

const ReduxT = () => {
  return (
    <>
      <div>
        <strong>Redux</strong> позволяет централизированно управлять состоянием
        компонентов
      </div>
      -----------
      <div>
        <div>
          <strong>Redux Store</strong> содержит в себе State и Reducer
        </div>
        <strong>State (Состояния)</strong> - то где хранится информация о
        состоянии всего приложения, является неизменяемым объектом, но можно
        создавать новые состояния с помощью Reducer
      </div>
      <div>
        <strong>Reducer</strong> - не изменяет текущее состоянии, а создает
        новые состояния
      </div>
      ---------
      <div>
        <strong>Action</strong> действия
      </div>
      <div>
        <strong>dispatch</strong> — это функция Redux хранилища(store). Вы
        вызываете store.dispatch , чтобы отправить действие.
      </div>
      <h2>Примеры кода:</h2>
      <div className="all-cards__example__code">
        <Link to="./reducer-js">
          <div className="cards__example__code" title="Посмотреть пример">
            Reducer на js
          </div>
        </Link>
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default ReduxT;
