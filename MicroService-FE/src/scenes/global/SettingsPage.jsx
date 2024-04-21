import React, { useState } from 'react';


function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for saving changes here
  };

  return (
    <div className="settings-page">
      <form onSubmit={handleSubmit}>
        <h2>General Settings</h2>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="newsletter">Subscribe to newsletter:</label>
          <input type="checkbox" id="newsletter" name="newsletter" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default SettingsPage;