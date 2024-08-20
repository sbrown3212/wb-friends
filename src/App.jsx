import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');

  const addFriend = () => {
    // My solution
    setFriends([...friends, {picture: picture, name: name}]);

    // // Lab instructions solution
    // const newFriends = [...friends];
    // newFriends.push({picture: picture, name: name});
    // setFriends(newFriends);

    setPicture('');
    setName('');
  };

  console.log(`Value for friends on state:`, friends);
  console.log(`Value for picture on state:`, picture);
  console.log(`Value for name on state:`, name);

  const friendInfo = friends.map((friendObj) => {
    return (
      <div key={friendObj.name}>
        <img src={friendObj.picture} alt={friendObj.name} />
        <span>{friendObj.name}</span>
      </div>
    )
  })

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

      <button onClick={addFriend}>Add Friend</button>

      {friendInfo}
    </div>
  );
}
