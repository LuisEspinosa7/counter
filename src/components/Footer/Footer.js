import React from "react";
import { useTheme } from "styled-components";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import { StyledParagraph } from "../styles/typography/Paragraph.styled";

const Footer = () => {
  const theme = useTheme();

  return (
    <StyledFlexContainer
      gridArea="footer" 
      height="4.375rem"
      background={theme.colors.primary.normal}
      color={theme.colors.secondary.normal}>
      <StyledParagraph
        color={theme.colors.secondary.normal}
        verticalPadding="1rem"
        horizontalPadding="1rem"
      >
        @Copyright Luis Espinosa, All rights reserved
      </StyledParagraph>
    </StyledFlexContainer>
  );
};

export default Footer;
