import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleClick = () =>{
    let path = `needs`; 
    history.push(path);
  }

  return (
    <div>
      <h1>Humanitarian Relief App</h1>
      <hr />
      <p>Thanks for visiting the humanitarian relief app!! <br/>
        View current needs by clicking the button below.</p>
      <button onClick={ handleClick }>View Current Needs</button>
    </div>
  );
}

export default Home;