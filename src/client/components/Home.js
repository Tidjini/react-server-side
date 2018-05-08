import React from "react";

const Home = () => {
  return (
    <div>
      <div>Welcome home</div>
      <Button
        onClick={() => {
          console.log("hi there");
        }}
      >
        Press Me
      </Button>
    </div>
  );
};

export default Home;
