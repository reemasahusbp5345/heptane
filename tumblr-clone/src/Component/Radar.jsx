import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiReplyOutline, mdiDotsHorizontal } from "@mdi/js";

const PostBox = styled.div`
  margin-top: 10px;
  height: auto;
  width: 250px;
  margin: 4px;
  background-color: white;
  border-radius: 5px;
`;

const PostBoxContent = styled.div`
  //   border: 1px solid red;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: -7px;
  //   padding: 5px 5px;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px 7px;

    & a {
      margin-top: 5px;
      font-weight: 600;
    }
  }
`;

const PostBoxFooter = styled.div`
  position: relative;
  height: 50px;
  width: 250px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & div {
    margin: 7px;
  }

  & div > * {
    padding: 5px;
  }
`;

const Radar = () => {
  return (
    <>
      <h3
        style={{
          marginLeft: "4px",
          marginTop: "10px",
          color: "white",
          fontSize: "25px",
        }}
      >
        Radar
      </h3>
      <hr style={{ width: "255px" }} />

      {/* Main Card Content */}
      <PostBox>
        <PostBoxContent>
          <div>
            <img
              src="https://64.media.tumblr.com/9f836c2ce90970a4a0b1d060a760a1a4/77955434c38b4da8-87/s64x64u_c1/0673cf79b2b2e386f13cf9a5688d9e20132cc7a6.jpg"
              alt="usernameAvatar"
              style={{ height: "45px", width: "45px" }}
            />
            <div>prinnany</div>
            <a href="https://www.google.com" style={{ textDecoration: "none" }}>
              Follow
            </a>
            <Icon
              path={mdiDotsHorizontal}
              title="heart"
              size={1}
              style={{ marginLeft: "20%", marginTop: "5px" }}
            />
          </div>
          <div style={{ width: "40px", objectFit: "fill" }}>
            <img
              src="https://64.media.tumblr.com/454001249b4917d752333c15e5d9da10/tumblr_pm6c77ZZsq1wf5mhio1_500.gifv"
              alt="usernameAvatar"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
        </PostBoxContent>

        {/* Card Footer */}
        <PostBoxFooter>
          <div>34 notes</div>
          <div>
            <Icon path={mdiReplyOutline} title="reblog" size={1.5} />
            <Icon path={mdiHeartOutline} title="heart" size={1.5} />
          </div>
        </PostBoxFooter>
      </PostBox>
    </>
  );
};

export { Radar };
