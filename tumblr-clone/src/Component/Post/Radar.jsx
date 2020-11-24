import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiReplyOutline, mdiDotsHorizontal } from "@mdi/js";

const PostBox = styled.div`
  border: 1px solid red;
  margin-top: 10px;
  height: auto;
  width: 250px;
  margin: 4px;
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
      <h3 style={{ marginLeft: "4px" }}>Radar</h3>
      <hr style={{ width: "255px" }} />

      {/* Main Card Content */}
      <PostBox>
        <PostBoxContent>
          <div>
            <img src="https://via.placeholder.com/30" alt="usernameAvatar" />
            <div>username</div>
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
            <img src="https://via.placeholder.com/250" alt="usernameAvatar" />
          </div>
          <div>Source</div>
        </PostBoxContent>

        {/* Card Footer */}
        <PostBoxFooter>
          <div>3473 notes</div>
          <div>
            <Icon path={mdiReplyOutline} title="reblog" size={1} />
            <Icon path={mdiHeartOutline} title="heart" size={1} />
          </div>
        </PostBoxFooter>
      </PostBox>
    </>
  );
};

export { Radar };
