import React from "react";
import styled from "styled-components";

const Profile = styled.div`
  border-radius: 10px;
  width: 250px;
  height: 250px;
  display: column;
`;
const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1594633313385-87fa7086b23c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGJyaWNrfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60");
  height: 50%;
  padding: 10px;
  color: "white";
`;
const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin: auto;
  background: white;
`;
class ProfileCard extends React.Component {
  render() {
    return (
      <Profile>
        <Background>
          <h3 style={{ color: "white" }}>reema</h3>

          <ProfilePic>
            <img
              style={{
                borderRadius: " 60px",
                width: "60px",
                height: "60px",
                margin: "10px",
              }}
              src="https://assets.tumblr.com/images/default_avatar/sphere_open_64.png"
              alt="avatar"
            />
          </ProfilePic>
        </Background>

        <div style={{ backgroundColor: "white", height: "50%" }}> </div>
      </Profile>
    );
  }
}

export { ProfileCard };
