import Wrapper from './Wrapper';

const ChildrenProp = () => {
  return (
    <>
      <h1>Свойства Children</h1>

      <Wrapper color="#999">
        <>
          <div>Передача children в компонент</div>
          <button>Кнопка</button>
        </>
      </Wrapper>

      <Wrapper color="#555">
        <>
          <div>Передача children в компонент 2</div>
          <button>Кнопка 2</button>
        </>
      </Wrapper>
      <div className="memorandum">
        Позволяет передавать в компоненты другие блоки js кода. Часто используют
        для создания модальных окон
      </div>
      <div className="body_article">
        <pre>
          <code>
            {`******* ChildrenProp.jsx *******  

import Wrapper from './Wrapper';

const ChildrenProp = () => {
  return (
    <>
      <h1>Свойства Children</h1>

      <Wrapper color="#999">
        <>
          <div>Передача children в компонент</div>
          <button>Кнопка</button>
        </>
      </Wrapper>

      <Wrapper color="#555">
        <>
          <div>Передача children в компонент 2</div>
          <button>Кнопка 2</button>
        </>
      </Wrapper>

export default ChildrenProp;`}
          </code>
        </pre>
      </div>
      <div className="body_article">
        <pre>
          <code>
            {`******* Wrapper.jsx *******  

const Wrapper = (props) => {
  const style = {
    backgroundColor: props.color,
    with: '250px',
    padding: '20px',
    textAlign: 'center',
    margin: '10px',
  };
  //console.log(props);
  return <div style={style}>{props.children}</div>;
};

export default Wrapper;`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default ChildrenProp;
