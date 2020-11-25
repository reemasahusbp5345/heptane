import React, { Component } from "react";
import { Landing } from "./Landing";
import styled from "styled-components";

const Wrap = styled.div``;
export class Home extends Component {
  render() {
    return (
      <Wrap>
        <Landing />
      </Wrap>
    );
  }
}
