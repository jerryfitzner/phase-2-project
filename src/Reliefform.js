import React, { useState } from 'react';

const Requestform = () => {
  const [form, setForm] = useState({
    name: '',
    need: '',
    location: '',
    contact: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  console.log(form)

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/needs', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    
  }

  return (
    <div>
      <h2>Request Relief</h2>
      <p>If you are in dire need of humanitarian assistance,<br/> 
        please fill out the form below to request help!</p>
      <div>
        <br/>
        <form onSubmit={handleSubmit}>
          <label>Name/Organization:</label>
            <input type="text" name="name" onChange={handleChange} />
            <br />
            <label>Location:</label>
            <input type="text" name="location" onChange={handleChange} />
            <br />
            <label>Describe Your Need:</label>
            <textarea type="text" name="need" onChange={handleChange} />
            <br />
            <label>How can we contact you?</label>
            <textarea type="text" name="contact" onChange={handleChange} />
            <br />
            <button>Request Help</button>
        </form>
      </div>
    </div>
  );
}

export default Requestform;