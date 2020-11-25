import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid red;
  height: 50px;
  width: 250px;
  display: flex;
  flex-direction: row;
  margin: 4px;
  color:white;

  & img {
    margin-top: 2px;
    padding: 3px;
  }
`;

const BlogCard = () => {
  return (
    <CardWrapper>
      <div>
        <img src="https://via.placeholder.com/40" alt="userImg" />
      </div>
      <div>
        <div style={{ fontWeight: 600 }}>Data 1</div>
        <div>Data 2</div>
      </div>
      <div style={{ marginLeft: "34%", marginTop: "9px", fontWeight: 600 }}>
        <a href="https://www.google.com" style={{ textDecoration: "none" }}>
          Follow
        </a>
      </div>
    </CardWrapper>
  );
};

class RecommendedBlogs extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ margin: "20px 4px 2px 4px",color:"white" }}>Recommended Blogs</h1>
        <hr style={{ width: "255px" }} />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
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

export { RecommendedBlogs };
