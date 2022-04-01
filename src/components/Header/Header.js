import React from "react";
import { useTheme } from "styled-components";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import {
  StyledIcon,
  StyledIconTitle,
  StyledIconWrapper,
} from "../styles/icons/Icons.styled";

const Header = () => {
  const theme = useTheme();

  return (
    <StyledFlexContainer 
      gridArea="navbar" 
      justifyContent="space-between"
      background={theme.colors.primary.normal}
      color={theme.colors.secondary.normal}
      >
      <StyledFlexContainer
        justifyContent="flex-start"
        verticalPadding="0.4rem"
        horizontalPadding="1.5rem"
      >
        <StyledIconWrapper
            width="4.25rem"
            height="4.25rem">
          <StyledIcon src="./images/icon_number_white.svg" />
        </StyledIconWrapper>
        <StyledIconTitle
          fontSize="2rem"
          fontWeight="800"
          verticalPadding="0"
          horizontalPadding="0.8rem"
        >
          Counter
        </StyledIconTitle>
      </StyledFlexContainer>

      <StyledIconWrapper
        verticalMargin="0"
        horizontalMargin="0.8rem"
        width="50px"
        height="50px"
      >
        <StyledIcon
          src="./images/hamburger_icon_white.svg"
          rotateDegree="-180deg"
        />
      </StyledIconWrapper>
    </StyledFlexContainer>
  );
};

export default Header;
