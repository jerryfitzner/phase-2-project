import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Requestform = ({ needCallback }) => {
  const [form, setForm] = useState({
    name: '',
    need: '',
    location: '',
    contact: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const history = useHistory();

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
    .then(data => {
      needCallback(data);
      history.push('/needs')
    })
    
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
            <input type="text" value={form.name} name="name" onChange={handleChange} />
            <br />
            <label>Location:</label>
            <input type="text" value={form.location} name="location" onChange={handleChange} />
            <br />
            <label>Describe Your Need:</label>
            <textarea type="text" value={form.need} name="need" onChange={handleChange} />
            <br />
            <label>How can we contact you?</label>
            <textarea type="text" value={form.contact} name="contact" onChange={handleChange} />
            <br />
            <button>Request Help</button>
        </form>
      </div>
    </div>
  );
}

export default Requestform;