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
  EditOutlined,
} from "@ant-design/icons";
import { Modal, Drawer } from "antd";
import { Logo } from "../../Component/Logo";
import { User } from "../../Component/User";
import {Search} from "../Search";
import {UserProfile} from "../UserProfile/UserProfile"

const Wrapper = styled.div`
  position: relative;
  max-width:100vw;
  width:100vw;
  height: 54px;
  background-color: #001935;
  color: white;
  display: flex;
  align-items:center;
  justify-content:space-between;
  border-bottom: 1px solid rgba(255,255,255, 0.13);
`;
const WrraperItem = styled.div`
  font-size: 25px;
  color: white;
`;
// const SearchItem = styled.div`
//   width:480px;
//   margin: 10px;

//   & div, input{
//     width:100%;
//   }

//   & svg{
//       margin: 0 10px;
//   }
// `;
// const LogoItem = styled.div`
  
//   & img{
//     margin: 0 10px;
//   width:10px;
//   cursor: pointer;
//   }
// `;
const IconHolder = styled.div`
  width:355px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-right:40px;
`;

const SearchLogo = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-left:10px;
  
  & input{
    width: 100%;
  }

  & :first-child{
    margin-right:10px;
    width:30px;
  }
`;
const Card = styled.div`
  border: 1px solid grey;
  width: 200px;
  height: 600px;
  scroll-behavior: auto;
  display: column;
`;
const Account = styled.div`
  height: 50%;
  & div:hover {
    background: lightgrey;
  }
`;
const Tumblr = styled.div`
  height: 50%;
`;

const Head = styled.div`
  display: flex;
  height: 10%;
  background: lightgrey;
  padding: 5px;
  color: #424242;
`;
const Icon = styled.div`
  display: flex;
  padding: 2px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin:auto;
  font-size:20px;
  & div:hover{
      background-color:lightgrey;
  }
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false,
      modal2Visible: false,
      user:false,
    };
  }

  toggle=()=>{
    const {user}=this.state;
    this.setState({
      user:!user
    })
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
          
          <SearchLogo>
              <Logo />

              <Search type="text" placeholder="Search Tumblr" />
          </SearchLogo>

          <IconHolder>
            <WrraperItem>
              <Link to={"/dashboard"} style={{ color: "white" }}>
              <svg width="20" height="21" fill="#fff" viewBox="0 0 20 21">
                  <path d="M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943">
                  </path>
                </svg>
              </Link>
            </WrraperItem>

            <WrraperItem>
              <Link to={"/trending/explore"} style={{ color: "white" }}>
              <svg viewBox="0 0 21.8 21.8" width="22" height="22" fill="#fff">
                <path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z">
                </path>
              </svg>
              </Link>
            </WrraperItem>

            <WrraperItem>
              <Link to={"/inbox"} style={{ color: "white" }}>
              <svg viewBox="0 0 23 16.9" width="23" fill="#fff" height="21">
                <path d="M20.9 0H2.1C.6 0 0 .7 0 2.2v12.5c0 1.6.6 2.2 2.1 2.2h18.8c1.5 0 2.1-.7 2.1-2.2V2.2C23 .7 22.4 0 20.9 0zm.4 13.6c.3.3-.2.8-.5 1.1-.1.2-.3.5-.5.5s-.2.1-.3-.1l-5.5-5-.6.5c-.7.6-1.6 1.1-2.4 1.1-.9 0-1.7-.4-2.4-1.1l-.6-.6-5.2 4.8c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.3-.3-.8-1-.5-1.3l5.1-4.9-5-5c-.3-.3.1-.8.3-1.1.3-.3.8-.4 1.1-.2L10 8.9c.4.4.9.8 1.4.9.6 0 1.1-.4 1.6-.9l6.6-6.7c.3-.3.9 0 1.2.3.3.3.4 1 .2 1.2l-4.9 4.8 5.2 5.1z">
                </path>
              </svg>
              </Link>
            </WrraperItem>

            <WrraperItem>

              <svg onClick={() => this.setModal1Visible(true)} fill="#fff" viewBox="0 0 21 21" width="22" height="22" fill="#ffffff">
                <path d="M10.5 0C4.7 0 0 4.722 0 10.55c0 2.21.7 4.22 1.8 5.828l-.7 4.12 4.5-.704C7.1 20.598 8.8 21 10.5 21 16.3 21 21 16.278 21 10.45S16.3 0 10.5 0zM5.9 7.636c0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .905-.8 1.708-1.7 1.708-.9 0-1.7-.803-1.7-1.708zm4.6 8.44c-2.1 0-3.9-1.105-4.6-2.712-.3-.603.3-1.307 1.1-1.307h6.8c.8 0 1.4.704 1.1 1.307-.5 1.607-2.3 2.713-4.4 2.713zm2.9-6.832c-.9 0-1.7-.804-1.7-1.708 0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .904-.7 1.708-1.7 1.708z">
                </path>
              </svg>

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

              <svg onClick={() => this.setModal1Visible(true)} fill="#fff" viewBox="0 0 13.8 19.6" width="14" height="21">
                <path d="M3.5 19.5c-.1 0-.2-.1-.2-.1-.6-.3-.9-.9-.7-1.5l2.2-5.8H1.3c-.1 0-.3 0-.4-.1-.4-.1-.6-.3-.8-.6-.2-.4-.2-1 .2-1.4L8.9.5c.3-.4.9-.6 1.4-.4.1 0 .2.1.2.1.6.3.9.9.7 1.5L9 7h3.5c.1 0 .3 0 .4.1.4.1.6.5.7.8.2.4.2 1-.2 1.4L4.8 19c-.2.3-.6.5-1 .5 0 .1-.2.1-.3 0z">
                </path>
              </svg>
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

            <WrraperItem >

              <svg viewBox="0 0 15 18.9" fill="#fff" width="15" height="21">
                <path d="M7.5 8.8c2.6 0 4.7-2 4.7-4.4S10.1 0 7.5 0 2.8 2 2.8 4.4C2.9 6.8 5 8.8 7.5 8.8zm0 1.5c-4.2 0-7.5 3.2-7.5 7.4 0 .6.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2 0-4.1-3.3-7.4-7.5-7.4z">
                </path>
              </svg>
            

            </WrraperItem>

            <WrraperItem>

            <div style={{borderRadius:"3px",background:"#00b8ff", border:"none", width:"45px", height:"32px", display:"flex", alignItems:"center",justifyContent:"center"}}>
              <svg viewBox="0 0 16.8 16.8" fill="#001935" width="22" height="22">
                <path d="M1.2 11.9l-1.2 5 5-1.2 8.2-8.2-3.8-3.8-8.2 8.2zM10 6.3l-6.2 6.2-.6-.6 6.2-6.2c0-.1.6.6.6.6zM13.1 0l-2.5 2.5 3.7 3.7 2.5-2.5L13.1 0z">
                </path>
              </svg>
            </div>

            </WrraperItem>
          </IconHolder>

        </Wrapper>
        { this.state.user && <div style={{width:"100vh",height:"100vh",position:"relative",zIndex:"10000"}}  >
             <Card>
        <Account>
          <Head>
            <div style={{ flex: 2 }}>Account</div>
            <div style={{ flex: 1 }}>Logout</div>
          </Head>

          <Icon>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="gray">
              <path d="M17.888 1.1C16.953.38 15.87 0 14.758 0c-1.6 0-3.162.76-4.402 2.139-.098.109-.217.249-.358.42a12.862 12.862 0 0 0-.36-.421C8.4.758 6.84 0 5.248 0 4.14 0 3.06.381 2.125 1.1-.608 3.201-.44 6.925 1.14 9.516c2.186 3.59 6.653 7.301 7.526 8.009.38.307.851.474 1.333.474a2.12 2.12 0 0 0 1.332-.473c.873-.71 5.34-4.42 7.526-8.01 1.581-2.597 1.755-6.321-.968-8.418"></path>
            </svg>
            <p style={{ flex: 3 }}>Likes</p>
            <p>11</p>
          </Icon>
          <Icon>
            <svg viewBox="0 0 20 21" width="20" height="21" fill=" gray ">
              <path d="M11.5 8.8c0-1.5-1.2-2.8-2.6-2.8-1.4 0-2.6 1.3-2.6 2.8 0 1.5 1.2 2.2 2.6 2.2 1.5 0 2.6-.7 2.6-2.2zM5 16.2v.8h7.7v-.8c0-3-1.7-4.2-3.9-4.2C6.7 12 5 13.2 5 16.2zM16 19H2V4h10V2H2C.9 2 0 2.9 0 4v14.9C0 20.1.9 21 2 21h14.2c1.1 0 1.8-.9 1.8-2.1V8h-2v11zm2-17V0h-2v2h-2v2h2v2h2V4h2V2h-2z"></path>
            </svg>
            <p style={{ flex: 3 }}>Following</p>
            <p>15</p>
          </Icon>
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill=" gray ">
              <path d="M24 10.526l-.36-.12-2.94-.962-.78-1.925 1.5-3.248-1.92-1.985-.36.18-2.76 1.444-1.86-.782L13.32 0h-2.58l-.12.421-1.08 2.707-1.86.782L4.5 2.346 2.58 4.33l1.56 3.188-.78 1.925L0 10.586v2.828l.36.12 2.94 1.083.78 1.924-1.5 3.309 1.92 1.985.36-.18 2.76-1.444 1.86.781L10.68 24h2.58l.12-.36 1.08-2.587 1.86-.782 3.18 1.564 1.92-1.985-.18-.361-1.38-2.827.78-1.925 3.3-1.203v-3.008H24zM7.2 11.97c0-2.647 2.16-4.812 4.8-4.812 2.64 0 4.8 2.165 4.8 4.812 0 2.647-2.16 4.812-4.8 4.812-2.64 0-4.8-2.165-4.8-4.812z"></path>
            </svg>
            <p>Settings</p>
          </Icon>
          <Icon>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill=" gray "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 2C5.10218 2 4.72064 2.15804 4.43934 2.43934C4.15804 2.72064 4 3.10218 4 3.5C4 3.89782 4.15804 4.27936 4.43934 4.56066C4.72064 4.84196 5.10218 5 5.5 5H8.65402C8.53195 4.68061 8.37741 4.32942 8.18628 3.98192C7.55732 2.83834 6.6939 2 5.5 2ZM11.346 5H14.5C14.8978 5 15.2794 4.84196 15.5607 4.56066C15.842 4.27936 16 3.89782 16 3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2C13.3061 2 12.4427 2.83834 11.8137 3.98192C11.6226 4.32942 11.4681 4.68061 11.346 5ZM17.6623 5C17.8826 4.53557 18 4.02384 18 3.5C18 2.57174 17.6313 1.6815 16.9749 1.02513C16.3185 0.368749 15.4283 0 14.5 0C12.1939 0 10.8073 1.66166 10.0613 3.01808C10.0405 3.0559 10.0201 3.09369 10 3.13142C9.97994 3.09369 9.95951 3.0559 9.93872 3.01808C9.19268 1.66166 7.8061 0 5.5 0C4.57174 0 3.6815 0.368749 3.02513 1.02513C2.36875 1.6815 2 2.57174 2 3.5C2 4.02384 2.11743 4.53557 2.33772 5H2C0.895431 5 0 5.89543 0 7V10C0 11.1046 0.895431 12 2 12V19C2 20.1046 2.89543 21 4 21H10H16C17.1046 21 18 20.1046 18 19V12C19.1046 12 20 11.1046 20 10V7C20 5.89543 19.1046 5 18 5H17.6623ZM14.5 7H11V10H17H18V7H14.5ZM9 7H5.5H2V10H3H9V7ZM16 19H11V12H16V19ZM9 19V12H4V19H9Z"
              ></path>
            </svg>
            <p>What's New</p>
          </Icon>
          <Icon>
            <svg viewBox="0 0 20 20" width="20" height="20" fill=" gray ">
              <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM8.7 13.7h2.6v2.5H8.7v-2.5zM14 8.6c-.2.6-.7 1.1-1.2 1.5-.2.2-.5.3-.7.5l-.6.6c-.2.2-.3.5-.3.8v.6H8.9v-.7c0-.5.1-.9.3-1.2.1-.3.3-.6.5-.8l.6-.6c.3-.1.5-.3.7-.5l.5-.5c.1-.2.2-.4.2-.7 0-.5-.1-.9-.4-1.1-.2-.2-.6-.4-1-.4-.3 0-.6.1-.8.2-.3 0-.5.2-.6.4-.2.2-.3.4-.3.7-.1.2-.1.5-.1.8H6c0-.6.1-1.1.3-1.6.2-.5.5-.9.8-1.3.4-.4.8-.7 1.3-.9.5-.2 1.1-.3 1.6-.3.8 0 1.4.1 2 .3.5.2.9.5 1.3.8.3.3.6.7.7 1 .1.4.2.7.2 1 0 .6-.1 1.1-.2 1.4z"></path>
            </svg>
            <p>Help</p>
          </Icon>
          <Icon>
            <svg width="20" height="12" viewBox="0 0 23 14" fill=" gray ">
              <path d="M21.225 1c.428 0 .775.347.775.775v10.45a.775.775 0 0 1-.775.775H1.775A.775.775 0 0 1 1 12.225V1.775C1 1.347 1.347 1 1.775 1h19.45m0-1H1.775C.796 0 0 .796 0 1.775v10.45C0 13.204.796 14 1.775 14h19.45c.979 0 1.775-.796 1.775-1.775V1.775C23 .796 22.204 0 21.225 0"></path>
              <path d="M3 3h2v2H3V3zm3 0h2v2H6V3zm3 0h2v2H9V3zm3 0h2v2h-2V3zM3 6h2v2H3V6zm0 3h2v2H3V9zm3-3h2v2H6V6zm3 0h2v2H9V6zm3 0h2v2h-2V6zm3-3h2v2h-2V3zm0 3h5v2h-5V6zm3-3h2v2h-2V3zm0 6h2v2h-2V9zM6 9h11v2H6V9z"></path>
            </svg>
            <p>Keyboard Shortcuts</p>
          </Icon>
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill=" gray ">
              <path d="M11.933 0C5.326 0 0 5.356 0 12s5.326 12 11.933 12a2.034 2.034 0 0 0 2.022-2.034c0-.542-.202-1.017-.54-1.356-.336-.339-.471-.813-.471-1.356 0-1.085.876-2.034 2.022-2.034h2.36c3.64 0 6.674-2.983 6.674-6.712C23.933 4.814 18.54 0 11.933 0zM4.652 12a2.034 2.034 0 0 1-2.023-2.034c0-1.085.877-2.034 2.023-2.034a2.034 2.034 0 0 1 0 4.068zm3.977-5.288a2.034 2.034 0 0 1-2.022-2.034c0-1.085.876-2.034 2.022-2.034s2.023.881 2.023 2.034c0 1.085-.877 2.034-2.023 2.034zm6.674 0a2.034 2.034 0 0 1-2.022-2.034c0-1.085.876-2.034 2.022-2.034 1.079 0 2.023.881 2.023 2.034-.068 1.085-.944 2.034-2.023 2.034zM19.281 12a2.034 2.034 0 0 1-2.023-2.034c0-1.085.877-2.034 2.023-2.034 1.079 0 2.022.882 2.022 2.034C21.236 11.12 20.36 12 19.281 12z"></path>
            </svg>
            <p>Change Palette</p>
          </Icon>
        </Account>
        <Tumblr>
          <Head>
            <div style={{ flex: 2 }}>Tumblrs</div>
            <div style={{ flex: 1 }}>+New</div>
          </Head>
          <Body>
            <div>
              <img
                style={{ borderRadius: "5px", width: "40px", padding: "3px" }}
                src="https://assets.tumblr.com/images/default_avatar/sphere_open_64.png"
                alt="avatar"
              />
            </div>

            <div>reema</div>
            <div>Posts</div>
            <div>Followers</div>
            <div>Activity</div>
            <div>Draft</div>
            <div>Queue</div>
            <div>Edit Apperance</div>
          </Body>
        </Tumblr>
      </Card> 
              </div>}
      </div>
    );
  }
}

export { Navbar };
