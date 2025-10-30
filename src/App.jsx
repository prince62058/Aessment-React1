import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WelcomeBanner from "./Components/WelcomeBanner";
import ThankYouMessage from "./Components/ThankYouMessage";
import UserDetails from "./Components/UserDetails";
import Greeting from "./Components/Greeting";
import TemperatureConverter from "./Components/TemperatureConverter";

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>React Class Components Demo</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Welcome</Link>
          <Link to="/thankyou" style={{ margin: "0 10px" }}>Thank You</Link>
          <Link to="/userdetails" style={{ margin: "0 10px" }}>User Details</Link>
          <Link to="/greeting" style={{ margin: "0 10px" }}>Greeting</Link>
          <Link to="/temperature" style={{ margin: "0 10px" }}>Temperature Converter</Link>
        </nav>

        <Routes>
          <Route path="/" element={<WelcomeBanner />} />
          <Route path="/thankyou" element={<ThankYouMessage />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/temperature" element={<TemperatureConverter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
