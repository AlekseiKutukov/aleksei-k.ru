import { useEffect, useState } from 'react';

const FetchUseEfect = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  console.log('App render');
  console.log(todo);

  return (
    <>
      <h1>Fetch и useEfect</h1>
      {todo && ( //проверяем возвращается ли объект todo из Api запроса
        <>
          <div>Заголовок полученый по API: {todo.title}</div>
          <div>userId полученый по API: {todo.userId}</div>
        </>
      )}

      <div className="memorandum">
        https://jsonplaceholder.typicode.com/todos/1
        <pre>
          <code>
            {`{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`import { useEffect, useState } from 'react';

const FetchUseEfect = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  console.log('App render');
  console.log(todo);

  return (
    <>
      <h1>Fetch и useEfect</h1>
      {todo && ( //проверяем возвращается ли объет todo из Api запроса
        <>
          <div>Заголовок полученый по API: {todo.title}</div>
          <div>userId полученый по API: {todo.userId}</div>
        </>
      )}
    </>
  );
};

export default FetchUseEfect;
`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default FetchUseEfect;
