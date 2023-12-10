import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
  // 아무것도 리턴하지 않는다는 함수를 의미한다.
}

export function Greetings({name, mark, optional, onClick}: GreetingsProps){
  const handleClick = () => onClick(name);

  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  )
}

// export const Greetings = ({name, mark, optional, onClick }: GreetingsProps) => (
//   <div>
//     Hello, {name} {mark}!
//     {optional && <p>{optional}</p>}
//   </div>
// )

Greetings.defaultProps = {
  mark: '!'
}

export default Greetings;

