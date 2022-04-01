import React from "react";
import { StyledFooterContainer } from "../styles/containers/FooterContainer.styled";
import { StyledParagraph } from "../styles/typography/Paragraph.styled";

const Footer = () => {
  return (
    <StyledFooterContainer gridArea="footer" height="4.375rem">
      <StyledParagraph
        color="#fff"
        verticalPadding="1rem"
        horizontalPadding="1rem"
      >
        @Copyright Luis Espinosa, All rights reserved
      </StyledParagraph>
    </StyledFooterContainer>
  );
};

export default Footer;
