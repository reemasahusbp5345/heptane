import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  height: 50px;
  width: 250px;
  display: flex;
  flex-direction: row;
  margin: 4px;
  color: white;

  & img {
    margin-top: 2px;
    padding: 3px;
  }
`;

const userData = [
  {
    imgUrl:
      "https://64.media.tumblr.com/7f8064dd6649b6f0e03a4c86b8804040/d6a2cdd5754f6f69-8c/s128x128u_c1/0a2d1a2c6746be0863f29dac083a849de08931ff.jpg",
    head: "olivrsm",
    content: "oliver",
  },
  {
    imgUrl:
      "https://64.media.tumblr.com/e136fc0c98b975b4e49388b5408c3a7d/c30813af4883e5f1-6d/s128x128u_c1/4cf2c87c2881a0bf980db59c73c3c932bf73d4d6.pnj",
    head: "thestrangeforest",
    content: "stranger",
  },
  {
    imgUrl: "https://64.media.tumblr.com/avatar_aa8ced2c8706_128.pnj",
    head: "oxboxer",
    content: "boxer",
  },
  {
    imgUrl:
      "https://64.media.tumblr.com/a164ee49cbd80c44f77ecbe7fc1b6828/52d0b43d2d45d0af-83/s128x128u_c1/c364695da509a8a422944171a4c316103b0d576a.pnj",
    head: "bbuseozer",
    content: "buzzer",
  },
];

class BlogCard extends React.Component {
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
    const { img, head, content } = this.props;
    const { isFollow } = this.state;
    return (
      <CardWrapper>
        <div>
          <img
            src={img}
            alt="userImg"
            style={{ height: "45px", width: "45px" }}
          />
        </div>
        <div>
          <div style={{ fontWeight: 600 }}>{head}</div>
          <div>{content}</div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginTop: "9px",
            fontWeight: 600,
            color: "#1890ff",
          }}
        >
          <div onClick={this.handleFollow}>
            {isFollow ? "Following" : "Follow"}
          </div>
        </div>
      </CardWrapper>
    );
  }
}

class TrendingBlogs extends React.Component {
  render() {
    return (
      <>
        <h1
          style={{
            margin: "20px 4px 2px 4px",
            color: "white",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Trending Blogs
        </h1>
        <hr style={{ width: "255px" }} />
        {userData?.map((item) => {
          return (
            <BlogCard
              img={item.imgUrl}
              head={item.head}
              content={item.content}
            />
          );
        })}
        <a
          href="https://www.google.com"
          style={{
            marginLeft: "4px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Explore all of Tumblr
        </a>
      </>
    );
  }
}

export { TrendingBlogs };
