import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Views
import HomePage from "./Views/HomePage/HomePage";
import AboutPage from "./Views/AboutPage/AboutPage";
import ContactPage from "./Views/ContactPage/ContactPage";
import DetailPage from "./Views/DetailPage/DetailPage";

// Components
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
