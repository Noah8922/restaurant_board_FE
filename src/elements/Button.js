import { height } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { height, text, _onClick, children, margin, width, padding, cursor } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    height: height,
    cursor: cursor,
  };

  return (
    <React.Fragment>
      <MyButton {...styles} onClick={_onClick}>{text ? text : children}</MyButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => { },
  margin: false,
  width: '100%',
  height: '100%',
  padding: "12px 0px",
  cursor: false,
};


const MyButton = styled.button`
  cursor: ${(props) => (props.cursor)};
  width: ${(props) => props.width};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  background-color: #f68843;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: ${(props) => props.height};
  transition: ease all .1s;
  @media only screen and (max-width: 960px) {
    width: ${(props) => (props.width ? "30%" : "")};
    height: ${(props) => (props.height ? "45px" : "")};}
  @media only screen and (max-width: 650px) {
    width: ${(props) => (props.width ? "40%" : "")};
    height: ${(props) => (props.height ? "45px" : "")};}
`

export default Button;