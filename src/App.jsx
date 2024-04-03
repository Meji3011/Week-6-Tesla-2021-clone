import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Signup from "./components/Signup/Signup";
import TeslaAccount from "./components/TeslaAccount/TeslaAccount";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase/init";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        // user is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
            element={<>{user ? <Navigate to="/teslaaccount" /> : <Login />}</>}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/teslaaccount"
            element={
              <>
                {user ? (
                  <>
                    <TeslaAccount
                      isMenuOpen={isMenuOpen}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                    {isMenuOpen && <Menu />}
                  </>
                ) : (
                  <Navigate to="/login" />
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
