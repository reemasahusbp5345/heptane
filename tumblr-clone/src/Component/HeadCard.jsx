import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiFormatTextVariantOutline,
  mdiCamera,
  mdiFormatQuoteOpen,
  mdiLinkVariant,
  mdiWechat,
  mdiHeadphones,
  mdiVideoVintage,
} from "@mdi/js";

const CardWrapper = styled.div`
  height: 95px;
  width: 500px;
  padding: 5px;
  margin: 5px 30%;
  display: flex;
  flex-direction: row;
`;

const AvatarBox = styled.div`
  border: 1px solid red;
  height: 70px;
  width: 70px;
  margin: 7px;

  & img {
    height: 70px;
    width: 70px;
  }
`;

const PostBox = styled.div`
  border: 1px solid black;
  margin-top: 7px;
  padding-top: 5px;
  height: 90px;
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const HeadCard = () => {
  return (
    <CardWrapper>
      <AvatarBox>
        <img src="https://via.placeholder.com/30" alt="avatar" />
      </AvatarBox>
      <PostBox>
        <div>
          <Icon path={mdiFormatTextVariantOutline} title="share" size={2} />
          <p>Text</p>
        </div>
        <div>
          <Icon path={mdiCamera} title="share" size={2} />
          <p>Photo</p>
        </div>
        <div>
          <Icon path={mdiFormatQuoteOpen} title="share" size={2} />
          <p>Quote</p>
        </div>
        <div>
          <Icon path={mdiLinkVariant} title="share" size={2} />
          <p>Link</p>
        </div>
        <div>
          <Icon path={mdiWechat} title="share" size={2} />
          <p>Chat</p>
        </div>
        <div>
          <Icon path={mdiHeadphones} title="share" size={2} />
          <p>Audio</p>
        </div>
        <div>
          <Icon path={mdiVideoVintage} title="share" size={2} />
          <p>Video</p>
        </div>
      </PostBox>
    </CardWrapper>
  );
};

export { HeadCard };
