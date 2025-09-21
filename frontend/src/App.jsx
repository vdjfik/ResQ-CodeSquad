import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Pets from "./components/Pets";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header with Navigation */}
        <header className="header">
          <h1>ResQ - Pet Adoption</h1>

          {/* Navigation Links */}
          <nav>
            <Link to="/">Home</Link>
            <Link to="/pets">Pets</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </nav>
        </header>

        {/* Main Section */}
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          &copy; 2025 ResQ - All Rights Reserved
        </footer>
      </div>
    </Router>
  );
}

export default App;
