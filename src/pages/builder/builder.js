import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import Stepper from "../../components/stepper";
import Builder from "../../components/builder";

const Main = styled.main`
  flex-grow: 1;
  padding-left: ${theme.padding};
  padding-right: ${theme.padding};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export default function Buidler() {
  const [step, setStep] = useState(0);

  return (
    <Main>
      <Stepper step={step} setStep={setStep} />
      <Builder setStep={setStep} step={step} />
    </Main>
  );
}
