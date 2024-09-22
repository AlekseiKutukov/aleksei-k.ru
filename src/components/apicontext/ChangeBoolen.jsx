import BoolenContext from '../../context/BoolenContext';
import { useContext } from 'react';

const ChangeBoolen = () => {
  const { boolen, setBoolen } = useContext(BoolenContext);
  return (
    <>
      <button onClick={() => setBoolen(boolen === 'true' ? 'false' : 'true')}>
        изменить значение
      </button>
    </>
  );
};

export default ChangeBoolen;
