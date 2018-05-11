import React from "react";

const Home = () => {
  return (
    <div>
      <div>Welcome home</div>
      <button
        onClick={() => {
          console.log("hi there");
        }}
      >
        Press Me
      </button>
    </div>
  );
};

export default {
  component: Home
};
