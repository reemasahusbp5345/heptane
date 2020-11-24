import React from "react";
import styled from "styled-components";
import { ExploreCard } from "./ExploreCard";
import { TrendingBlogs } from "./TrendingBlogs";
import { TrendingSearches } from "./TrendingSearches";

const RecommendBar = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  margin-left: 15%;
  margin-top: 2px;
  color: white;

  & div {
    display: flex;
    flex-direction: row;
    margin: 3px;
    margin-bottom: 3px;
    margin-top: 0px;
  }
`;

export const Explore = () => {
  return (
    <div style={{ backgroundColor: "#001935" }}>
      <RecommendBar>
        <div>Recommended for you</div>
        <div>
          <div>Trending</div>
          <div>Staff picks</div>
          <div>Text</div>
          <div>Photos</div>
          <div>GIFs</div>
          <div>Quotes</div>
          <div>Chats</div>
          <div>Audio</div>
          <div>Video</div>
          <div>Asks</div>
        </div>
      </RecommendBar>
      <hr />
      {/* Cards */}
      <div style={{ margin: "30px 15%" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ExploreCard height={"400px"} />
          <ExploreCard height={"450px"} />
          <ExploreCard height={"370px"} />
          <ExploreCard height={"400px"} />
          <div>
            <TrendingBlogs />
            <TrendingSearches />
          </div>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ExploreCard height={"400px"} />
          <ExploreCard height={"450px"} />
          <ExploreCard height={"370px"} />
          <ExploreCard height={"400px"} />
          <ExploreCard height={"450px"} />
        </div>
      </div>
    </div>
  );
};
