import { createContext } from 'react';

//const BoolenContext = createContext(true)

const BoolenContext = createContext({
  boolen: '',
  setBoolen: () => {}, // чтобы избежать ошибок
});

export default BoolenContext;
