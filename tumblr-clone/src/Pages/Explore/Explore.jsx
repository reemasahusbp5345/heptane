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

const exploreDataTop = [
  {
    avatar:
      "https://64.media.tumblr.com/0caacbf5bd3f0a1615c1aa889009c67a/ef44758acb9e82ff-e4/s64x64u_c1/455ce6e337d5645a869adbe3414ab89e049cdd2f.jpg",
    username: "kopi",
    post:
      "https://64.media.tumblr.com/2a08577f465f2f30f0d1a258653193a2/d49f152ce96d7960-d2/s250x400/8e6fbaf4826f6c4a6452018b28dfb6b12aef8236.png",
  },
  {
    avatar: "https://64.media.tumblr.com/avatar_b92d6b304c61_64.pnj",
    username: "brooklyn1",
    post:
      "https://64.media.tumblr.com/45e0aefd60d6c845a031b3f2f93ff4fa/tumblr_pc9yswSu9g1x02ik2o1_500.jpg",
  },
  {
    avatar:
      "https://64.media.tumblr.com/6a8bad8ce4af2bb978106428ce1abf61/6c86d3fb8abecb33-ea/s64x64u_c1/86560cb4904f3d43a455a4a851ee9f15e4e4a39b.jpg",
    username: "hellomr",
    post:
      "https://64.media.tumblr.com/fab9ecfe0d5bb07a59805e45e653fabc/tumblr_ova1l6WbkT1ws7znjo1_500.jpg",
  },
  {
    avatar:
      "https://64.media.tumblr.com/9f836c2ce90970a4a0b1d060a760a1a4/77955434c38b4da8-87/s64x64u_c1/0673cf79b2b2e386f13cf9a5688d9e20132cc7a6.jpg",
    username: "photorock",
    post:
      "https://64.media.tumblr.com/872fefe37fceb2aa110c50d1187c9449/tumblr_orw8l8qv4y1ws7znjo1_500.jpg",
  },
];

const exploreDataBottom = [
  {
    avatar:
      "https://64.media.tumblr.com/b24db9ad6f713dec2cdd147c32d068bf/tumblr_oy5njjQxQb1wf5mhio1_500.jpg",
    username: "buzzer23",
    post:
      "https://64.media.tumblr.com/453111be84b7dfc08ba2f0507f5aa82e/7fdc0452e0e97f2b-3b/s640x960/90c25099934887ed1737094a46a015043c7dc97b.jpg",
  },
  {
    avatar: "https://64.media.tumblr.com/avatar_db45064ac2f9_64.pnj",
    username: "oilly",
    post:
      "https://64.media.tumblr.com/b04c3f269f799e7b82e41a4cf2cfc896/94d46cc2483a6cd1-b7/s400x600/d1004fd4f372d69bae00dab4539bf828d0172394.jpg",
  },
  {
    avatar:
      "https://64.media.tumblr.com/0067ec0c5ef58ebd3549b9cedc32b4c9/deeecc9c2ce06705-4b/s64x64u_c1/cc9dc0814c384c03faa829ddfa61193123826d31.jpg",
    username: "matter",
    post:
      "https://64.media.tumblr.com/0f7cd48c62df9b10cd86e8753a26acbf/510089c31c30842e-48/s500x750/2f3abf7354054b61ca68a48f8b28dba3740341a2.gifv",
  },
  {
    avatar:
      "https://64.media.tumblr.com/34364ba6dcdb549cde5cff497baab2ae/56f39a7b8c0f707a-16/s64x64u_c1/ee1e1132598576696dc43e721f6e1b5a4a0dac6d.jpg",
    username: "manny",
    post:
      "https://64.media.tumblr.com/275f32ad8495c381f4c7884ce11daf72/8003a34e337e578e-bc/s500x750/625d516a912753d9e9e3cf6dd6f55ad2853babca.png",
  },
  {
    avatar: "https://64.media.tumblr.com/avatar_2144f770fbd3_64.pnj",
    username: "scientist",
    post:
      "https://64.media.tumblr.com/7ea17cb661cd97f410a9804040cdba12/af78fded650b45fb-63/s400x600/958ebd011ca02e820223958cbd40b25f0b6550f3.jpg",
  },
];

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
      <div style={{ margin: "30px 10%" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {exploreDataTop?.map((item) => {
            return (
              <ExploreCard
                avatar={item.avatar}
                username={item.username}
                post={item.post}
              />
            );
          })}
          <div>
            <TrendingBlogs />
            <TrendingSearches />
          </div>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard /> */}
          {exploreDataBottom?.map((item) => {
            return (
              <ExploreCard
                avatar={item.avatar}
                username={item.username}
                post={item.post}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
