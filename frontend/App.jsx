import "./App.css";
import Pets from "./components/Pets";

function App() {
  return (
    <div className="app">
      <header
        style={{
          backgroundColor: "#4CAF50",
          padding: "20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>ResQ - Pet Adoption</h1>
      </header>

      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Welcome to ResQ!</h2>
        <p>Find your perfect furry friend and give them a loving home.</p>

        <Pets /> {/* CRUD Pets Component */}
      </main>

      <footer
        style={{
          backgroundColor: "#333",
          padding: "10px",
          color: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        &copy; 2025 ResQ - All Rights Reserved
      </footer>
    </div>
  );
}

export default App;


