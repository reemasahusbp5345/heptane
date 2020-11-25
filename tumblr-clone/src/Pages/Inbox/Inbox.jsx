import React from "react";
import { Box } from "./Box";
import { AllMessages } from "./AllMessages";
import { Footer } from "./Footer";

const Inbox = () => {
  return (
    <div style={{ backgroundColor: "#001935", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box />
        <AllMessages />
      </div>
      <Footer />
    </div>
  );
};

export { Inbox };
