import { useState } from 'react';
import './App.css';
import NameInput from './components/NameInput';
import { ThemeCheckbox } from './components/ThemeCheckbox';

function App() {
  const [name, setName] = useState('Person');

  return (
    <div className="App">
      <h1>Lesson4</h1>
      <ThemeCheckbox name={name} />
      <NameInput name={name} setName={setName} />
    </div>
  );
}

export default App;
