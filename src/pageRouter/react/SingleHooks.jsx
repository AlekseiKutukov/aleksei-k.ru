import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import hooks from '../../data/hooks';
import NotFound from '../NotFound';
import '../../style/react.css';
import Boolen from '../../components/apicontext/Boolen';
import ChangeBoolen from '../../components/apicontext/ChangeBoolen';
import BoolenContext from '../../context/BoolenContext';

const SingleHooks = () => {
  const params = useParams();
  //console.log(params);
  const location = useLocation();
  //console.log(location);

  const [boolen, setBoolen] = useState('false');
  const [like, setLike] = useState(0);

  const pageUseContext = params.hooksSlug === 'usecontext';
  const pageUseState = params.hooksSlug === 'usestate';
  const pageUseEffect = params.hooksSlug === 'useeffect';
  const pageUseParams = params.hooksSlug === 'useparams';
  const pageUseLocation = params.hooksSlug === 'uselocation';

  useEffect(() => {
    console.log('Счетчик был изменен до', like);
    return () => {
      console.log('Компонент удален');
    };
  }, [like]); // Зависимость от состояния счетчика

  const hook = hooks.find((hook) => hook.slug === params.hooksSlug);

  if (!hook) {
    return <NotFound />;
  }

  return (
    <>
      <h1>{hook?.title}</h1>

      {pageUseState || pageUseEffect ? (
        <div className="example-hooks">
          <button onClick={() => setLike(like + 1)}>like</button> {like}
        </div>
      ) : null}

      {pageUseParams ? console.log(params) : null}

      {pageUseLocation ? console.log(location) : null}

      {pageUseContext ? (
        //передаем value={boolen} в провайдер, чтобы потом получить значение
        <BoolenContext.Provider
          value={{ boolen: boolen, setBoolen: setBoolen }}
        >
          <div className="example-hooks">
            <Boolen />
            <ChangeBoolen />
          </div>
        </BoolenContext.Provider>
      ) : null}

      <div className="hook-description">{hook?.description}</div>
      {hook.memorandum ? (
        <div className="hook-memorandum">{hook?.memorandum}</div>
      ) : null}
      <div className="hook-example">{hook?.example}</div>

      <Link to=".." relative="path">
        <div className="link__all-hook">Все хуки</div>
      </Link>
    </>
  );
};

export default SingleHooks;
