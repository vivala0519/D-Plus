import React from "react";
import tw from "tailwind-styled-components"

const SubtitleText = tw.div`
${(props) => (props.size === "1" ? `font-min1 text-lg` : "")};
${(props) => (props.size === "2" ? `font-min1 text-base` : "")};

`;

const Subtitle = (props) => {
  const { children, onClick, size } =
  props;


  return <SubtitleText onClick={onClick} size={size} >{children}</SubtitleText>;
};

Subtitle.defaultProps = {
  children: null,
  onClick: () => {},
  size: 1,
};



export default Subtitle;
