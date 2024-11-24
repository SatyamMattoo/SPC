import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ComponentsPage from "./pages/Components";
import TeamPage from "./pages/Team";
import CadManufacturingPage from "./pages/Cad";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={<Home />}
        />
        {/* Placeholder for other pages */}
        <Route
          path="/components"
          element={<ComponentsPage />}
        />
        <Route
          path="/cad"
          element={<CadManufacturingPage />}
        />
        <Route
          path="/team"
          element={<TeamPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
