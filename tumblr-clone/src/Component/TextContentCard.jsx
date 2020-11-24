import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiHeartOutline,
  mdiReplyOutline,
  mdiMessageReply,
  mdiShareVariantOutline,
  mdiDotsHorizontal,
  mdiTrashCanOutline,
  mdiPencilOutline,
} from "@mdi/js";

const CardWrapper = styled.div`
  height: auto;
  width: 500px;
  margin-left: 30%;
  display: flex;
  flex-direction: row;
`;

const AvatarBox = styled.div`
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
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin-top: 10px;
  height: auto;
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
  //   border: 1px solid red;
  height: auto;
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
  justify-content: flex-end;

  & div {
    margin: 7px;
  }

  & div > * {
    padding: 5px;
  }
`;

const TextContentCard = () => {
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
          </div>
          <div>
            <Icon path={mdiDotsHorizontal} title="share" size={1} />
          </div>
        </PostBoxHeader>
        <PostBoxContent>
          <div style={{ fontSize: "30px" }}>Title</div>
          <div style={{ fontSize: "20px" }}>Content</div>
        </PostBoxContent>

        {/* Card Footer */}
        <PostBoxFooter>
          <div>
            <Icon path={mdiShareVariantOutline} title="share" size={2} />
            <Icon path={mdiMessageReply} title="reply" size={2} />
            <Icon path={mdiReplyOutline} title="reblog" size={2} />
            <Icon path={mdiHeartOutline} title="heart" size={2} />
            <Icon path={mdiTrashCanOutline} title="heart" size={2} />
            <Icon path={mdiPencilOutline} title="heart" size={2} />
          </div>
        </PostBoxFooter>
      </PostBox>
    </CardWrapper>
  );
};

export { TextContentCard };
