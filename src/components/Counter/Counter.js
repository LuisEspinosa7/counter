import React, { useState } from "react";
import { useTheme } from "styled-components";
import { StyledButton } from "../styles/buttons/Button.styled";
import { StyledCounterButton } from "../styles/buttons/CounterButton.styled";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import { StyledGridContainer } from "../styles/containers/GridContainer.styled";
import { StyledH2Title } from "../styles/typography/H2Title.styled";
import { StyledIndicator } from "../styles/typography/Indicator.styled";
import { StyledParagraph } from "../styles/typography/Paragraph.styled";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const theme = useTheme();

  return (
    <StyledGridContainer
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr 1fr 2fr 1fr"
      maxHeight="25rem"
      width="25rem"
      gridGap="0.5rem"
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
      >
        Easy Counter
      </StyledH2Title>

      <StyledParagraph
        lineHeight="1.3rem"
        textAlign="center"
        verticalPadding="1rem"
        horizontalPadding="1rem"
        color={theme.colors.primary.normal}
      >
        Count as many numbers as you want, it is easy, quick and free.
      </StyledParagraph>

      <StyledFlexContainer justifyContent="center" alignItems="center">
        <StyledIndicator
          fontSize="9rem"
          fontWeight="300"
          textShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          color={theme.colors.primary.normal}
        >
          {counter}
        </StyledIndicator>
      </StyledFlexContainer>

      <StyledFlexContainer
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
      >
        <StyledButton
          verticalPadding="0.5rem"
          horizontalPadding="1.6rem"
          fontSize="2rem"
          borderRadius="5px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          background={theme.colors.primary.normal}
          color={theme.colors.secondary.normal}
          id="btnIncrement"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </StyledButton>
        <StyledButton
          verticalPadding="0.5rem"
          horizontalPadding="1.6rem"
          fontSize="2rem"
          borderRadius="5px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          background={theme.colors.primary.normal}
          color={theme.colors.secondary.normal}
          id="btnDecrement"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </StyledButton>
      </StyledFlexContainer>
    </StyledGridContainer>
  );
};

export default Counter;
