import React from "react";

const style = {
  height: "20px",
  textAlign: "center",
  borderRadius: "3px",
  fontWeight: "600",
  fontSize: "12px",
  margin: "2px",
  padding: "1px",
};

const flex = {
  display: "flex",
  flexDirection: "row",
};

class TrendingSearches extends React.Component {
  render() {
    return (
      <>
        <h3 style={{ marginLeft: "4px" }}>Trending Searches</h3>
        <hr style={{ width: "255px" }} />
        <div>
          <div style={{ ...flex }}>
            <div
              style={{
                ...style,
                backgroundColor: "#00b51d",
                width: "150px",
              }}
            >
              BLACK LIVES MATTER
            </div>
            <div
              style={{
                ...style,
                backgroundColor: "#ff492f",
                width: "95px",
              }}
            >
              ANIMANIACS
            </div>
          </div>

          <div style={{ ...flex }}>
            <div
              style={{
                ...style,
                backgroundColor: "#00b8ff",
                width: "150px",
              }}
            >
              STEVEN UNIVERSE
            </div>
            <div
              style={{
                ...style,
                backgroundColor: "#ff62ce",
                width: "95px",
              }}
            >
              BLACKPINK
            </div>
          </div>

          <div style={{ ...flex }}>
            <div
              style={{
                ...style,
                backgroundColor: "#e8d73a",
                width: "100px",
              }}
            >
              POLITICS
            </div>
            <div
              style={{
                ...style,
                backgroundColor: "#00cf35",
                width: "90px",
              }}
            >
              MINECRAFT
            </div>
            <div
              style={{
                ...style,
                backgroundColor: "#00b51d",
                width: "50px",
              }}
            >
              JAPAN
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { TrendingSearches };
