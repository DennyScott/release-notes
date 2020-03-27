import React, { Fragment } from "react";
import styled from "styled-components";
import Order from "../../order";
import {
  LeftPanel,
  RightPanel,
  Step,
  Title,
  Description,
  Next
} from "./layout";

function OrderStep({ onNext }) {
  return (
    <Fragment>
      <LeftPanel small>
        <Step>Step 3</Step>
        <Title>Big news at the top? Get your report in order!</Title>
        <Description>
          Want to to see more important changes at the start of the report? Drag
          and drop the repos in the desired order, and report will generate
          using your preferences.
        </Description>
        <Next onNext={onNext} />
      </LeftPanel>
      <RightPanel large>
        <Order />
      </RightPanel>
    </Fragment>
  );
}

export default OrderStep;
