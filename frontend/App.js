import React, { useState } from 'react';
import './App.css';

function App() {
  const [alerts, setAlerts] = useState([]);
  const [appName, setAppName] = useState('fintech');
  const [version, setVersion] = useState('1.0.0');
  const [message, setMessage] = useState('');

  const deploy = async () => {
    // Intentional bug: wrong endpoint
    const res = await fetch('/deply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ app_name: appName, version })
    });
    const data = await res.json();
    setMessage(data.status || data.detail);
  };

  const rollback = async () => {
    const res = await fetch('/rollback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ app_name: appName, version })
    });
    const data = await res.json();
    setMessage(data.status);
  };

  const getAlerts = async () => {
    const res = await fetch('/alerts');
    const data = await res.json();
    // Intentional bug: wrong key
    setAlerts(data.alerts);
  };

  return (
    <div className="App">
      <h1>DevFlow: Self-Healing CI/CD for FinTech Apps</h1>
      <p>Automate CI/CD with rollback, alerts, canary deploy</p>
      <div>
        <input value={appName} onChange={e => setAppName(e.target.value)} />
        <input value={version} onChange={e => setVersion(e.target.value)} />
        <button onClick={deploy}>Deploy</button>
        <button onClick={rollback}>Rollback</button>
        <button onClick={getAlerts}>Get Alerts</button>
      </div>
      <div>{message}</div>
      <ul>
        {alerts && alerts.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  );
}

export default App;
