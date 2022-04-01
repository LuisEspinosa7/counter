import React from "react";
import { useTheme } from "styled-components";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import {
  StyledFontIcon,
  StyledIconTitle,
  StyledIconWrapper,
} from "../styles/icons/Icons.styled";

const Header = () => {
  const theme = useTheme();

  return (
    <StyledFlexContainer 
      gridArea="" 
      justifyContent="space-between"
      background={theme.colors.primary.normal}
      color={theme.colors.secondary.normal}
      boxShadow="rgb(0 0 0 / 24%) 0px 3px 8px"
      zIndex="10"
      >
      <StyledFlexContainer
        justifyContent="flex-start"
        verticalPadding="0.4rem"
        horizontalPadding="1.5rem"
      >
        <StyledIconWrapper
            width="4.25rem"
            height="4.25rem">
          <StyledFontIcon 
            className="fa-solid fa-hashtag" 
            fontSize="3.125rem" />
        </StyledIconWrapper>
        <StyledIconTitle
          fontSize="2rem"
          fontWeight="800"
          verticalPadding="0"
          horizontalPadding="0.3rem"
        >
          Counter
        </StyledIconTitle>
      </StyledFlexContainer>

      <StyledIconWrapper
        verticalMargin="0"
        horizontalMargin="1.5rem"
        width="3.125rem"
        height="3.125rem"
      >
        <StyledFontIcon
          className="fa-solid fa-bars" 
          rotateDegree="-180deg"
          fontSize="3.125rem"/>

      </StyledIconWrapper>
    </StyledFlexContainer>
  );
};

export default Header;
