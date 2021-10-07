import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Sizes = {
  small: {
    "--border": "1px solid #000000",
    "--font-size": "14px",
    "--icon-size": "16px",
  },
  large: {
    "--border": "2px solid #000000",
    "--font-size": "18px",
    "--icon-size": "24px",
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = Sizes[size];

  let iconSize;
  if (size === "small") {
    iconSize = "16";
  } else {
    iconSize = "24";
  }

  return (
    <Wrapper>
      <InputWrapper width={width} style={styles}>
        <IconWrapper style={styles}>
          <Icon id={icon} size={iconSize} />
        </IconWrapper>
        <VisuallyHidden><label>{label}</label> </VisuallyHidden>
        <Input {...delegated} />
      </InputWrapper>
    </Wrapper>
  );
};


const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 36px;
  color:inherit;
  font-size: var(--font-size);
  font-weight: 700;
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  position:relative;
  width: fit-content;
  padding: 4px;
  color: ${COLORS.gray700};
  &:focus-within {
    outline: 5px auto -webkit-focus-ring-color;   
  }
`

const InputWrapper = styled.div`

  border-bottom: var(--border);
  padding: 4px;
  width: ${(p) => p.width}px;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
  &:hover input{
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  
  position:absolute;
  top:0;
  bottom:0;
  margin: auto 0;
  height: var(--icon-size);
  
  
`;



export default IconInput;
