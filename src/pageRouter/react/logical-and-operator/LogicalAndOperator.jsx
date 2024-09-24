import { useState } from 'react';
import Counter from './Counter';
import Button from './Button';
import '../../../style/style.css';

const StateViaProps = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const buttonStyle = { backgroundColor: 'lightgreen' };

  return (
    <>
      <h1>Логический оператор И (оператор короткого замыкания)</h1>
      <div className="example_code">
        <Counter count={count} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        {/* {count > 0 && ( */}
        {!!count && ( // конвертировали в логическое значение
          <div>
            <button style={buttonStyle} onClick={resetCount}>
              Сброс
            </button>
          </div>
        )}
      </div>
      <div className="body_article">
        <pre>
          <code>
            {`******* Корневой файл *******  

import { useState } from 'react';
import Counter from './Counter';
import Button from './Button';
import '../../../style/style.css';

const StateViaProps = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Логический оператор И (оператор короткого замыкания)</h1>
      <div className="example_code">
        <Counter count={count} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        {/* {count > 0 && ( */}
        {!!count && ( // конвертировали в логическое значение
          <div>
            <button style={buttonStyle} onClick={resetCount}>
              Сброс
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default StateViaProps;`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`******* Button.jsx *******
            
  const Button = ({ onClick }) => {
    return (
      <>
        <button onClick={onClick}>Кликни</button>
      </>
    );
  };

export default Button;`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`******* Counter.jsx *******

  const Counter = ({ count }) => {
    return <div>Всего кликов: {count}</div>;
  };

export default Counter;`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default StateViaProps;
