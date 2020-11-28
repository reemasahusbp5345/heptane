import React from "react";
import styled from "styled-components";
import { RecommendedBlogs } from "../../Component/RecommendedBlogs";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiReplyOutline, mdiDotsHorizontal } from "@mdi/js";
import { render } from "react-dom";

const PostBox = styled.div`
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  margin-top: 10px;
  // height: auto;
  width: 250px;
  margin: 4px;
  padding: 2px;
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

export class ExploreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollow: false,
    };
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow() {
    const { isFollow } = this.state;
    this.setState({
      isFollow: !isFollow,
    });
  }

  render() {
    const { avatar, username, post } = this.props;
    const { isFollow } = this.state;
    return (
      <div>
        {/* Main Card Content */}
        <PostBox>
          <PostBoxContent>
            <div>
              <img
                src={avatar}
                alt="usernameAvatar"
                style={{ height: "45px", width: "45px", borderRadius: "5px" }}
              />
              <div style={{ fontWeight: "600" }}>{username}</div>
              <div
                onClick={this.handleFollow}
                style={{
                  marginLeft: "auto",
                  marginTop: "5px",
                  fontWeight: 600,
                  color: "#1890ff",
                }}
              >
                {isFollow ? "Following" : "Follow"}
              </div>
              <Icon
                path={mdiDotsHorizontal}
                title="heart"
                size={1}
                style={{ marginLeft: "20%", marginTop: "5px" }}
              />
            </div>
            <div style={{ width: "40px", objectFit: "fill" }}>
              <img
                src={post}
                alt="usernameAvatar"
                style={{ height: "295px", width: "245px", borderRadius: "5px" }}
              />
            </div>
          </PostBoxContent>

          {/* Card Footer */}
          <PostBoxFooter>
            <div></div>
            <div>
              <Icon path={mdiReplyOutline} title="reblog" size={1.5} />
              <Icon path={mdiHeartOutline} title="heart" size={1.5} />
            </div>
          </PostBoxFooter>
        </PostBox>
      </div>
    );
  }
}
