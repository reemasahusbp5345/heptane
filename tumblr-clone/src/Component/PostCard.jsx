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
import { AppContext } from "../Context/AppContext";
import Axios from "axios";

const CardWrapper = styled.div`
  height: 600px;
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
    border-radius: 5px;
  }
`;
const PostBox = styled.div`
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin-top: 10px;
  height: 590px;
  width: 500px;
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

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollow: this.props.isFollow,
      isLike: this.props.isLike,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleToggle(id) {
    const { isFollow } = this.state;
    Axios.patch(`https://tumblr-server.herokuapp.com/posts/${id}`, {
      isFollow: !isFollow,
    });

    this.setState({
      isFollow: !isFollow,
    });
  }

  handleLike(id) {
    const { isLike } = this.state;
    Axios.patch(`https://tumblr-server.herokuapp.com/posts/${id}`, {
      isLike: !isLike,
    });

    this.setState({
      isLike: !isLike,
    });
  }

  render() {
    const { id, postImgUrl, username, avatarUrl } = this.props;
    const { handleToggle, handleLike } = this;
    const { isLike } = this.state;
    return (
      <CardWrapper>
        {/* Card Header */}
        <AvatarBox>
          <img src={avatarUrl} alt="avatar" />
        </AvatarBox>

        {/* Main Card Content */}
        <PostBox>
          {/* Card Header */}
          <PostBoxHeader>
            <div>
              <div>{username}</div>
              <div
                onClick={() => handleToggle(id)}
                style={{ color: "#4a90ff" }}
              >
                {this.state.isFollow ? "Following" : "Follow"}
              </div>
            </div>
            <div>
              <Icon path={mdiDotsHorizontal} title="share" size={1} />
            </div>
          </PostBoxHeader>
          {/* Card Content */}
          <PostBoxContent>
            <div style={{ width: "40px" }}>
              <img
                src={postImgUrl}
                alt="usernameAvatar"
                style={{ width: "390px" }}
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
              <Icon path={mdiShareVariantOutline} title="share" size={1.5} />
              <Icon path={mdiMessageReply} title="reply" size={1.5} />
              <Icon path={mdiReplyOutline} title="reblog" size={1.5} />
              {isLike ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 20 18"
                  fill="red"
                  onClick={() => this.handleLike(id)}
                >
                  <path d="M17.888 1.1C16.953.38 15.87 0 14.758 0c-1.6 0-3.162.76-4.402 2.139-.098.109-.217.249-.358.42a12.862 12.862 0 0 0-.36-.421C8.4.758 6.84 0 5.248 0 4.14 0 3.06.381 2.125 1.1-.608 3.201-.44 6.925 1.14 9.516c2.186 3.59 6.653 7.301 7.526 8.009.38.307.851.474 1.333.474a2.12 2.12 0 0 0 1.332-.473c.873-.71 5.34-4.42 7.526-8.01 1.581-2.597 1.755-6.321-.968-8.418"></path>
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 20 18"
                  onClick={() => this.handleLike(id)}
                  stroke="#444"
                >
                  <path d="M14.658 0c-1.625 0-3.21.767-4.463 2.156-.06.064-.127.138-.197.225-.074-.085-.137-.159-.196-.225C8.547.766 6.966 0 5.35 0 4.215 0 3.114.387 2.162 1.117c-2.773 2.13-2.611 5.89-1.017 8.5 2.158 3.535 6.556 7.18 7.416 7.875A2.3 2.3 0 0 0 9.998 18c.519 0 1.028-.18 1.436-.508.859-.695 5.257-4.34 7.416-7.875 1.595-2.616 1.765-6.376-1-8.5C16.895.387 15.792 0 14.657 0h.001zm0 2.124c.645 0 1.298.208 1.916.683 1.903 1.461 1.457 4.099.484 5.695-1.973 3.23-6.16 6.7-6.94 7.331a.191.191 0 0 1-.241 0c-.779-.631-4.966-4.101-6.94-7.332-.972-1.595-1.4-4.233.5-5.694.619-.475 1.27-.683 1.911-.683 1.064 0 2.095.574 2.898 1.461.495.549 1.658 2.082 1.753 2.203.095-.12 1.259-1.654 1.752-2.203.8-.887 1.842-1.461 2.908-1.461h-.001z"></path>
                </svg>
              )}
            </div>
          </PostBoxFooter>
        </PostBox>
      </CardWrapper>
    );
  }
}

export { PostCard };
