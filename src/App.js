import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './Components/Users.js';
function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect( () =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])
  const addMember = (name) => {
       setTeam([...team, name]);
  }
  return (
    <div >
         <h1>Team Builder</h1>
         <ul>
           {
             team.map((m, idx)=> <li key={idx}>{m}</li>)
           }
         </ul>
         {
           users.map(user => <Users user={user} addMember={addMember}></Users>)
         }
    </div>
  );
}

export default App;
