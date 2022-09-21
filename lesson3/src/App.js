import './App.css';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
      <h1>Lesson 3</h1>
      <Counter initialValue={0} />
      <Counter initialValue={99} />
    </div>
  );
}

export default App;
