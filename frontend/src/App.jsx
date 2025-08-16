import "./App.css";
import Pets from "./components/Pets";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header
        style={{
          backgroundColor: "#4CAF50",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", margin: 0 }}>ResQ - Pet Adoption</h1>
      </header>

      {/* Main Section */}
      <main
        style={{
          padding: "20px",
          textAlign: "center",
          color: "black", // ✅ ensures visible text in main
        }}
      >
        <h2>Welcome to ResQ!</h2>
        <p>Find your perfect furry friend and give them a loving home.</p>

        {/* Pets Component */}
        <Pets />
      </main>

      {/* Footer */}
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
