import React from "react";

const Logo = (props) => {

  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        src="https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png"
        alt=""
      />
    </header>
  );
};

export default Logo;
