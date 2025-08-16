import React, { useEffect, useState } from 'react';

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then(res => res.json())
      .then(data => setBackendStatus(data.status))
      .catch(() => setBackendStatus("❌ Backend not reachable"));
  }, []);

  return (
    <div className="app">
      <header style={{ backgroundColor: '#4CAF50', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>ResQ - Pet Adoption</h1>
      </header>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Welcome to ResQ!</h2>
        <p>Find your perfect furry friend and give them a loving home.</p>
        <p><b>Backend Status:</b> {backendStatus}</p>
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Browse Pets
        </button>
      </main>

      <footer style={{ backgroundColor: '#333', padding: '10px', color: 'white', textAlign: 'center', marginTop: '20px' }}>
        &copy; 2025 ResQ - All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
