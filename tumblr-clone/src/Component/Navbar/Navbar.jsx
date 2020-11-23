import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import "antd/dist/antd.css";
import {
  HomeOutlined,
  CompassOutlined,
  MailOutlined,
  SmileOutlined,
  ThunderboltOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Modal, Drawer } from "antd";
import { Logo } from "../../Components/Logo";
import { User } from "../../Components/User";
import Search from "antd/lib/input/Search";

const Wrapper = styled.div`
  position: relative;
  height: 50px;
  background-color: #1a237e;
  color: white;
  display: flex;
`;
const WrraperItem = styled.div`
  flex: 1;
  
  font-size: 25px;
  color: white;
`;
const SearchItem = styled.div`
  flex: 9;
  margin: 10px;
`;
const LogoItem = styled.div`
  margin: auto 20px;
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false,
      modal2Visible: false,
    };
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <LogoItem>
            <Logo />
          </LogoItem>

          <SearchItem>
            <Search />
          </SearchItem>
          <WrraperItem>
            <Link to={"/dashboard"} style={{ color: "white" }}>
              <HomeOutlined />{" "}
            </Link>
          </WrraperItem>
          <WrraperItem>
            <Link to={"/trending/explore"} style={{ color: "white" }}>
              <CompassOutlined />{" "}
            </Link>
          </WrraperItem>
          <WrraperItem>
            <Link to={"/inbox"} style={{ color: "white" }}>
              <MailOutlined />{" "}
            </Link>
          </WrraperItem>
          <WrraperItem>
            <SmileOutlined onClick={() => this.setModal1Visible(true)} />

            <Modal
              title="60px to Top"
              style={{ top: 20 }}
              visible={this.state.modal1Visible}
              onOk={() => this.setModal1Visible(false)}
              onCancel={() => this.setModal1Visible(false)}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
          </WrraperItem>
          <WrraperItem>
            <ThunderboltOutlined onClick={() => this.setModal1Visible(true)} />

            <Modal
              title="60px to Top"
              style={{ top: 20 }}
              visible={this.state.modal1Visible}
              onOk={() => this.setModal1Visible(false)}
              onCancel={() => this.setModal1Visible(false)}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
          </WrraperItem>
          <WrraperItem>
            <User />
          </WrraperItem>
          <WrraperItem>
            <EditOutlined />
          </WrraperItem>
        </Wrapper>
        <hr />
      </div>
    );
  }
}

export { Navbar };
