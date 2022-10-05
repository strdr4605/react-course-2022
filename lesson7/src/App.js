import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import User from './components/User';

function App() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    axios.get('https://reqres.in/api/users/5')
      .then(response => {
        console.log({response})
        setUser(response.data.data)
      });
  }, []);
  
  return (
    <div className="App">
      <h1>Lesson 6</h1>
      <User user={user} />
    </div>
  );
}

export default App;
