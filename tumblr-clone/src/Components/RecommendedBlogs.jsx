import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid red;
  height: 50px;
  width: 200px;
  display: flex;
  flex-direction: row;
`;

const BlogCard = () => {
  return (
    <CardWrapper>
      <div>
        <img src="https://via.placeholder.com/30" alt="userImg" />
        <div>
          <div>Data 1</div>
          <div>Data 2</div>
        </div>
      </div>
      <div>Follow</div>
    </CardWrapper>
  );
};

// class RecommendedBlogs extends React.Component {
//     render() {
//         render(
//             <>Recommended Blogs</>
//         )
//     }
// }

export { BlogCard };
