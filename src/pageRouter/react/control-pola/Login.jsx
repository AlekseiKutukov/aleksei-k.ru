import { useState } from 'react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleForSubmint = (event) => {
    event.preventDefault(); //убирает перезагрузку странице при клике кнопки

    const userData = {
      userName: userName,
      password: password,
    };
    console.log(userData);
    alert(JSON.stringify(userData)); //потому-что алерт не показывает объекты
  };
  return (
    <>
      <div className="Wrapper">
        <h1>Контролируемые поля</h1>
        <form onSubmit={handleForSubmint}>
          <label>
            Username:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} //функция вызывается при изменение поля
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="body_article">
        <pre>
          <code>
            {`
import { useState } from 'react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleForSubmint = (event) => {
    event.preventDefault(); //убирает перезагрузку странице при клике кнопки

    const userData = {
      userName: userName,
      password: password,
    };
    console.log(userData);
    alert(JSON.stringify(userData)); //потому-что алерт не показывает объекты
  };
  return (
    <>
      <div className="Wrapper">
        <h1>Контролируемые поля</h1>
        <form onSubmit={handleForSubmint}>
          <label>
            Username:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} //функция вызывается при изменение поля
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default Login;
