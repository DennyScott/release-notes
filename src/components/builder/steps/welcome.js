import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Step,
  Title,
  Description,
  LeftPanel,
  RightPanel,
  ReportImage,
  Next
} from "./layout";

export default function Welcome({ onNext }) {
  return (
    <Fragment>
      <LeftPanel>
        <Step>Step 1</Step>
        <Title>Welcome! Let's build some release notes!</Title>
        <Description>
          To build a report, you're going to select and the Github repositories
          you'd like to include.
        </Description>
        <Next onNext={onNext} />
      </LeftPanel>
      <RightPanel>
        <ReportImage />
      </RightPanel>
    </Fragment>
  );
}
