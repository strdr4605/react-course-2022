import './App.css';
import NameInput from './components/NameInput';
import { ThemeCheckbox } from './components/ThemeCheckbox';

function App() {
  return (
    <div className="App">
      <h1>Lesson4</h1>
      <ThemeCheckbox />
      <NameInput />
    </div>
  );
}

export default App;
