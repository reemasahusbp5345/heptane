import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiHeartOutline,
  mdiReplyOutline,
  mdiMessageReply,
  mdiShareVariantOutline,
  mdiDotsHorizontal,
} from "@mdi/js";

const CardWrapper = styled.div`
  border: 1px solid red;
  height: 600px;
  width: 500px;
  margin-left: 30%;
  display: flex;
  flex-direction: row;
`;
const AvatarBox = styled.div`
  border: 1px solid red;
  margin-top: 10px;
  height: 70px;
  width: 70px;
  margin: 4px;

  & img {
    height: 70px;
    width: 70px;
  }
`;

const PostBox = styled.div`
  border: 1px solid red;
  margin-top: 10px;
  height: 590px;
  width: 450px;
  margin: 4px;
`;
const PostBoxHeader = styled.div`
  position: relative;
  height: 50px;
  width: 415px;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & div {
    display: flex;
    flex-direction: row;
    padding: 6px;
    margin: 2px;
    font-weight: 600;

    & a {
      margin-top: 7px;
    }
  }
`;
const PostBoxContent = styled.div`
  border: 1px solid red;
  height: 485px;
  display: flex;
  flex-direction: column;
  padding: 5px 5px;

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
  width: 415px;
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

const PostCard = () => {
  return (
    <CardWrapper>
      {/* Card Header */}
      <AvatarBox>
        <img src="https://via.placeholder.com/30" alt="avatar" />
      </AvatarBox>

      {/* Main Card Content */}
      <PostBox>
        <PostBoxHeader>
          <div>
            <div>username</div>
            <a href="https://www.gooogle.com">Follow</a>
          </div>
          <div>
            <Icon path={mdiDotsHorizontal} title="share" size={1} />
          </div>
        </PostBoxHeader>
        <PostBoxContent>
          <div>
            <img src="https://via.placeholder.com/30" alt="usernameAvatar" />
            <div>username</div>
            <a href="https://www.google.com">Follow</a>
          </div>
          <div style={{ width: "40px" }}>
            <img
              src="https://via.placeholder.com/400x300"
              alt="usernameAvatar"
            />
          </div>
          <div>Content</div>
          <div>Source</div>
          <div style={{ color: "green", fontWeight: "600" }}>Recommended</div>
        </PostBoxContent>

        {/* Card Footer */}
        <PostBoxFooter>
          <div>3473 notes</div>
          <div>
            <Icon path={mdiShareVariantOutline} title="share" size={1} />
            <Icon path={mdiMessageReply} title="reply" size={1} />
            <Icon path={mdiReplyOutline} title="reblog" size={1} />
            <Icon path={mdiHeartOutline} title="heart" size={1} />
          </div>
        </PostBoxFooter>
      </PostBox>
    </CardWrapper>
  );
};

export { PostCard };
