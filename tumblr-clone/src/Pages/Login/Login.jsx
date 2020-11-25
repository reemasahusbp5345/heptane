import React, { Component } from "react";
import styled from "styled-components";
import { HomeNav } from "../Landing/HomeNav";
import { FooterLinks } from "../Landing/FooterLinks";
import { Button } from "../../Component/LandingPageComponents/Button";
import { Input } from "../../Component/LandingPageComponents/Input";
import { AppContext } from "../../Context/AppContext";

const LoginWrap = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  background: url("https://64.media.tumblr.com/e799c282ff66b86fc00e89906f8e6b89/303bb91cfb35cfbd-d1/s2048x3072/4bb69f9bfbe4956e4d4100d1aa1a964edf09add2.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .mid img {
    width: 200px;
    margin-bottom: 20px;
  }

  & .mid input {
    margin-bottom: 10px;
    padding-left: 10px;
  }

  & .mid button {
    padding: 0 5px;
    background-color: rgb(0, 184, 255);
    color: white;
  }

  & .mid {
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mid div {
    margin-bottom: 0;
  }

  & .bottom {
    width: 100%;
    height: 7%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export class Login extends Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      email,
      password,
      currentUser,
      redirectTo,
    } = this.context;
    return (
      <div>
        {/* Load Login if currentUser is not false or redirect to login */}
        {!currentUser ? 
          <LoginWrap>
            <HomeNav login={false} signup={true} />
            <div className="mid">
              <img src={process.env.PUBLIC_URL + "/tumblr.png"} alt="" />
              <form onSubmit={(e) => handleSubmit(e)}>
                <Input
                  name="email"
                  handleChange={handleChange}
                  value={email}
                  type="email"
                  placeholder="Enter Email"
                />
                <Input
                  name="password"
                  handleChange={handleChange}
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                />
                <Button label="Log in" />
              </form>
            </div>
            <div className="bottom">
              <FooterLinks />
            </div>
          </LoginWrap> : <Redirect to="/dashboard" />}
      </div>
    );
  }
}

Login.contextType = AppContext;
