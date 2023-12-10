import Counter from './Counter'
import MyForm from './MyForm'
import ReducerSample from './ReducerSample';


function App() {
  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form);
  };

  const onClick = (name: string) => {
    console.log(`${name} says hello!`);
  }
  return (
    <MyForm onSubmit={onSubmit}/>
  );
}

export default App;
