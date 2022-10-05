import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './components/User';
import Input from './components/Input';

import './App.css';

function App() {
  const [user, setUser] = useState(undefined);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    if (userId.length === 0) {
      setUser(undefined);
      return;
    }

    async function getUser() {
      try {
      const response = await axios.get(`https://reqres.in/api/users/${userId}`);
      // console.log(response);
      setUser(response.data.data);
      } catch (error) {
        // console.log({error});
        setUser(undefined);
      }
    }
    
    getUser();
  }, [userId]);

  function onInputChange(newValue) {
    // console.log('value from input ', newValue);
    setUserId(newValue);
  }
  
  return (
    <div className="App">
      <h1>Lesson 7</h1>
      <Input label="Enter user Id" value={userId} onChange={onInputChange} />
      <User user={user} />
    </div>
  );
}

export default App;
