import React from "react";
import { SyncLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div
      style={{
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur( 4px )",
        border: " 1px solid rgba( 255, 255, 255, 0.18 )",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SyncLoader color="#9333EA" />
    </div>
  );
};

export default LoadingScreen;
