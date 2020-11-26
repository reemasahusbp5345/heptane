import React, { Component } from "react";
import styled from "styled-components";
import { HomeNav } from "./HomeNav";
import { FooterLinks } from "./FooterLinks";
import { Button } from "../../Component/LandingPageComponents/Button";
import { Link } from "react-router-dom";
const LandingWrap = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  background: url("https://64.media.tumblr.com/e799c282ff66b86fc00e89906f8e6b89/303bb91cfb35cfbd-d1/s2048x3072/4bb69f9bfbe4956e4d4100d1aa1a964edf09add2.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .mid img {
    width: 200px;
  }
  & .mid {
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mid div {
    margin-bottom: 15px;
  }
  & .mid p {
    white-space: pre-line;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  & .bottom {
    width: 100%;
    height: 14%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  & .link1, .link2{
    width:300px;
    height:45px;
    border: none;
    outline:none;
    background-color: #fff;
    color: #444;
    font-size:1rem;
    font-weight:bold;
    letter-spacing:0.25px;
    cursor:pointer;
    display:flex;
    align-items: center;
    justify-content:center;
  }

  & .link1{
    margin-bottom:20px;
    background: #00b8ff;
    color:white;
  }
  
`;
export class Landing extends Component {
  render() {
    return (
      <LandingWrap className="first">
        <HomeNav />
        <div className="mid">
          <img src={process.env.PUBLIC_URL + "/tumblr.png"} alt="" />
          <p>
            Come for what you love. {"\n"}
            Stay for what you discover.
          </p>
          {/* <Button label="Get Started" />
          <Button label="Log in" /> */}
          <Link className="link1" to="/signup">
            Get Started
          </Link>
          <Link className="link2" to="/login">
            Log in
          </Link>

          <Link style={{ color: "white" }} to="/trending/explore">
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z"
                />
              </svg>
              <p style={{ marginLeft: "5px" }}>Here's What's trending</p>
            </div>
          </Link>
        </div>
        <div className="bottom">
          <FooterLinks />
        </div>
      </LandingWrap>
    );
  }
}
