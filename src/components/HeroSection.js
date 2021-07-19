import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function HeroSection() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link
          to=""
          className="btns nav-links-btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={loginWithRedirect}
        >
          GET STARTED
        </Link>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
