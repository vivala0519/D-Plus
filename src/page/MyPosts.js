import React from "react";
import { Button } from "../elements";

import { useHistory } from "react-router-dom";

import { SocialLogin } from "../components";

const MyPosts = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      크리에이트 폼 모아놓기
      <SocialLogin />

    </div>
  );
};

export default MyPosts;