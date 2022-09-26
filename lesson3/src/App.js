import './App.css';
import Counter from './components/Counter';
import { FunctionalCounter } from './components/FunctionalCounter';

function App() {

  return (
    <div className="App">
      <h1>Lesson 3</h1>
      <Counter initialValue={0} />
      <Counter initialValue={99} />
      <FunctionalCounter initialValue={555} />
    </div>
  );
}

export default App;
