import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { auth } from "../../firebase/init";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    // e.preventDefault make sure that it does not do the default browser event, and you can code your own behaviors.

    if (!fName) {
      return alert("Please enter a first name!");
    }
    if (!lName) {
      return alert("Please enter a last name!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fName,
        })
          .then(() => {
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: fName,
              })
            );
            navigate("/teslaaccount");
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
            // Handle the error
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup">
      <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className="signup__info">
        <h1>Create Account</h1>
        <form className="signup__form">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Create Account" type="submit" onClick={signUp} />
        </form>
        <div className="login__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="Sign In" />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
