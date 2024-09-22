import { useContext } from 'react';
import BoolenContext from '../../context/BoolenContext';

const BoolenInfoo = () => {
  const boolen = useContext(BoolenContext);
  //   console.log(boolen);
  return <h1>{boolen.boolen}</h1>;
};

export default BoolenInfoo;
