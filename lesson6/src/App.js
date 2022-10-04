import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    fetch('https://reqres.in/api/users/1')
      .then(response => response.json())
      .then(userFromAPI => {
        console.log({userFromAPI})
        setUser(userFromAPI.data)
      })
  }, []);
  
  return (
    <div className="App">
      <h1>Lesson 6</h1>
      <User user={user} />
    </div>
  );
}

export default App;
