import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');

  return (
    <div>
      <label htmlFor="picture">Picture:</label>
      <input 
        id="picture" 
        type="text" 
        name="picture" 
        value={picture} 
        onChange={(e) => setPicture(e.target.value)}
      />

      <label htmlFor="name">Name:</label>
      <input 
        id="name" 
        type="text" 
        name="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />

      <button>Add Friend</button>
    </div>
  );
}
