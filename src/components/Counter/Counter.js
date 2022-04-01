import React, { useState } from "react";
import { StyledCounterButton } from "../styles/buttons/CounterButton.styled";
import { StyledCounterContainer } from "../styles/containers/CounterContainer.styled";
import { StyledFlexContainer } from "../styles/containers/FlexContainer.styled";
import { StyledH2Title } from "../styles/typography/H2Title.styled";
import { StyledIndicator } from "../styles/typography/Indicator.styled";
import { StyledParagraph } from "../styles/typography/Paragraph.styled";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <StyledCounterContainer
      gridTemplateColumns="1fr"
      gridTemplateRows="1fr 1fr 4fr 1fr"
      height="24rem"
      width="25rem"
      gridGap="0.5rem"
    >
      <StyledH2Title
        fontSize="2.4rem"
        verticalMargin="auto"
        horizontalMargin="auto"
        fontWeight="600"
        textShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        Easy Counter
      </StyledH2Title>

      <StyledParagraph
        lineHeight="1.3rem"
        textAlign="center"
        verticalPadding="1rem"
        horizontalPadding="1rem"
      >
        Count as many numbers as you want, it is easy, quick and free.
      </StyledParagraph>

      <StyledFlexContainer justifyContent="center" alignItems="center">
        <StyledIndicator
          fontSize="9rem"
          fontWeight="300"
          textShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          {counter}
        </StyledIndicator>
      </StyledFlexContainer>

      <StyledFlexContainer
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
      >
        <StyledCounterButton
          verticalPadding="0.5rem"
          horizontalPadding="1.6rem"
          fontSize="2rem"
          borderRadius="5px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          id="btnIncrement"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </StyledCounterButton>
        <StyledCounterButton
          verticalPadding="0.5rem"
          horizontalPadding="1.6rem"
          fontSize="2rem"
          borderRadius="5px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          id="btnDecrement"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </StyledCounterButton>
      </StyledFlexContainer>
    </StyledCounterContainer>
  );
};

export default Counter;
