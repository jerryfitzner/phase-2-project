import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Needs = () => {
  const [needs, setNeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/needs')
    .then(resp => resp.json())
    .then(need => setNeeds(need))
  },[]);

  const needList = needs.map(need => {
    return (
    <div key={uuidv4()}>
      <h3><u>{ need.name }</u></h3>
      <p><strong>Location:</strong> { need.location }</p>
      <p><strong>Need:</strong> {need.need}</p>
      <button>Help Organiztion</button>
      <hr />
    </div>
    )
  })
  

  return (
    <div>
      <h1>Needs: </h1>
      <hr />
      {needList}
    </div>
  );
}

export default Needs;

{/* <div>
      <h2>Relief Request</h2>
      <h3>Name/Organization</h3>
      <p>Location</p>
      <p>Phone Number</p>
      <button>Help Organiztion</button>
    </div> */}