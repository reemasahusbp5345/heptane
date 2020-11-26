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
    imgUrl: "https://64.media.tumblr.com/avatar_70d3a370797c_64.pnj",
    head: "newton",
    content: "force",
  },
  {
    imgUrl:
      "https://64.media.tumblr.com/0caacbf5bd3f0a1615c1aa889009c67a/ef44758acb9e82ff-e4/s64x64u_c1/455ce6e337d5645a869adbe3414ab89e049cdd2f.jpg",
    head: "eliminated",
    content: "winner",
  },
  {
    imgUrl:
      "https://64.media.tumblr.com/5e4a668f8e573761bc66145ecdc44f4b/6cf61cfeea810b04-59/s64x64u_c1/5bcef58903ad02ce66019499b432296faebbd11d.jpg",
    head: "loggingOut",
    content: "exit",
  },
  {
    imgUrl:
      "https://64.media.tumblr.com/335f8a1f48b4c7a3e0dddfd7bf7c74a9/baa6c827170f1f2a-6d/s64x64u_c1/58bfbfaa0ae47cea6c7e5e235e67f305ea9cfa31.jpg",
    head: "happyMonk",
    content: "sage",
  },
];

const BlogCard = ({ img, head, content }) => {
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
      <div style={{ marginLeft: "auto", marginTop: "9px", fontWeight: 600 }}>
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
        <h1 style={{ margin: "20px 4px 2px 4px", color: "white" }}>
          Recommended Blogs
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

export { RecommendedBlogs };
