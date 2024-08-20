import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');

  return (
    <div>
      <label htmlFor="picture">Picture:</label>
      <input type="text" name="picture" id="picture" />

      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />

      <button>Add Friend</button>
    </div>
  );
}
