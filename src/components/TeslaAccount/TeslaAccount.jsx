import React from "react";
import "./TeslaAccount.css";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import Car from "../Car/Car";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/init";

function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="teslaAccount">
      <div className="teslaAccount__header">
        <div className="telsaAccount__logo">
          <Link to="/">
            <img
              className="teslaAccount__logo--img"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/teslaaccount" className="teslaAccount__disabled-link">
            Model S
          </Link>
          <Link to="/teslaaccount" className="teslaAccount__disabled-link">
            Model 3
          </Link>
          <Link to="/teslaaccount" className="teslaAccount__disabled-link">
            Model X
          </Link>
          <Link to="/teslaaccount" className="teslaAccount__disabled-link">
            Model Y
          </Link>
          <Link to="/teslaaccount" className="teslaAccount__disabled-link">
            Solar Roof
          </Link>
          <Link to="/teslaaccount" className="teslaAccount__disabled-link">
            Solar Panels
          </Link>
          <Link to="/teslaaccount" className="teslaAccount__disabled-link">
            Shop
          </Link>
          <Link to="/teslaaccount">Tesla Account</Link>
          <Link onClick={logoutOfApp}>Log Out</Link>
          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className="teslaAccount__closeIcon" />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      </div>
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName + "'s Tesla"}</h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link to="/">Home</Link>
          <Link to="/teslaaccount">Account</Link>
          <Link to="/teslaaccount">History</Link>
          <Link onClick={logoutOfApp}>Sign Out</Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        ></Car>
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        ></Car>
      </div>
    </div>
  );
}

export default TeslaAccount;
