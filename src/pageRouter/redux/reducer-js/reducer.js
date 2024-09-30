const initialState = [];
//функция принимает состоянии и действие
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload]; //формируем новое состояние
    case 'DELETE_NAME':
      return state.filter((personName) => personName !== action.payload);
    case 'CLEAR_NAME':
      return [];
    default:
      return state;
  }

  //   //на основание типа действия (ДОБАВЛЕНИЕ)
  //   if (action.type === 'ADD_NAME') {
  //     return [...state, action.payload]; //формируем новое состояние
  //   }
  //   //на основание типа действия (УДАЛЕНИЕ)
  //   if (action.type === 'DELETE_NAME') {
  //     return state.filter((personName) => personName !== action.payload);
  //   }
  //   if (action.type === 'CLEAR_NAME') {
  //     return [];
  //   }
  //   return state; //если тип не ADD_NAME то просто возвращаем текущее состояние
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Aleksei' });
console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Vasa' });
console.log(newState);

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Vasa' });
console.log(newState);

newState = reducer(newState, { type: 'CLEAR_NAME' });
console.log(newState);

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Sasha' });
console.log(newState);
