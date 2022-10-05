import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import User from './components/User';

function App() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    async function getUser() {
      const response = await axios.get('https://reqres.in/api/users/5');
      console.log(response);
      setUser(response.data.data);
    }
    
    getUser();
  }, []);
  
  return (
    <div className="App">
      <h1>Lesson 6</h1>
      <User user={user} />
    </div>
  );
}

export default App;
