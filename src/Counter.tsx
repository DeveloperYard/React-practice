import React, {useReducer} from 'react';

type Action = {type: 'INCREASE'} | {type: 'DECREASE'}
// 이와 같은 방식으로 action을 |으로 연달아 나열할 수 있다.

function reducer(state: number, action: Action):number {
  switch(action.type){
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => dispatch({type: 'INCREASE'});
  const onDecrease = () => dispatch({type: 'DECREASE'});

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;