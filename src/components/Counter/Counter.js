import React, { useState } from "react";
import { useTheme } from "styled-components";
import { StyledButton } from "../styles/buttons/Button.styled";
import { StyledCounterContainer } from "../styles/containers/CounterContainer.styled";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import { StyledH2Title } from "../styles/typography/H2Title.styled";
import { StyledIndicator } from "../styles/typography/Indicator.styled";
import { StyledParagraph } from "../styles/typography/Paragraph.styled";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const theme = useTheme();

  return (
    <StyledCounterContainer
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr 1fr 3fr 1.3fr"
      maxHeight="26rem"
      width="25rem"
      gridGap="0.5rem"
      verticalPadding="1rem"
      horizontalPadding="1rem"
      background={theme.colors.secondary.normal}
      boxShadow="2px 2px 2px 2px rgba(0, 0, 0, 0.3)"
      borderRadius="5px"
    >
      <StyledH2Title
        fontSize="2.4rem"
        verticalMargin="auto"
        horizontalMargin="auto"
        fontWeight="600"
        textShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        color={theme.colors.primary.normal}
        role="heading"
      >
        Easy Counter
      </StyledH2Title>

      <StyledParagraph
        lineHeight="1.3rem"
        textAlign="center"
        verticalPadding="1rem"
        horizontalPadding="1rem"
        color={theme.colors.primary.normal}
        role="contentinfo"
      >
        Count as many numbers as you want, it is easy, quick and free.
      </StyledParagraph>

      <StyledFlexContainer justifyContent="center" alignItems="center">
        <StyledIndicator
          fontSize="10rem"
          fontWeight="400"
          textShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          color={theme.colors.primary.normal}
          role="heading"
        >
          {counter}
        </StyledIndicator>
      </StyledFlexContainer>

      <StyledFlexContainer
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
        verticalMargin="0.2rem"
        horizontalMargin="0"
      >
        <StyledButton
          verticalPadding="0.5rem"
          horizontalPadding="1.3rem"
          fontSize="1.7rem"
          borderRadius="10px"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
          background={theme.colors.accent.normal}
          color={theme.colors.secondary.normal}
          border="none"
          hoverBoxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
          id="btnDecrement"
          onClick={() => setCounter(counter - 1)}
          role="button"
        >
          -
        </StyledButton>
        <StyledButton
          verticalPadding="0.5rem"
          horizontalPadding="1.1rem"
          fontSize="1.7rem"
          borderRadius="10px"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
          background={theme.colors.accent.normal}
          color={theme.colors.secondary.normal}
          border="none"
          hoverBoxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
          id="btnIncrement"
          onClick={() => setCounter(counter + 1)}
          role="button"
        >
          +
        </StyledButton>
      </StyledFlexContainer>
    </StyledCounterContainer>
  );
};

export default Counter;
