import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import Login from "./components/Login/Login";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen && <Menu />}
                <HeaderBlock />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
