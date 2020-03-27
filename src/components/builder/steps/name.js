import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Step,
  Title,
  Description,
  LeftPanel,
  RightPanel,
  Image,
  Next
} from "./layout";
import addDescription from "../../../images/adddescription.png";

const TextButton = styled.div`
  display: flex;
`;
const NameInput = styled.input`
  height: 45px;
  width: 150px;
  border: none;
  border: 1px solid #ddd;
  border-right: 0;
  font-size: 1rem;
  padding-left: 1rem;
`;

export default function Name({ onNext }) {
  return (
    <Fragment>
      <LeftPanel>
        <Step>Step 4</Step>
        <Title>Time to name and describe these notes!</Title>
        <Description>
          Your notes are stored with a name and a description so you can always
          retrieve previous releases at any time!
        </Description>
        <TextButton>
          <NameInput placeholder="Name" />
          <Next onNext={onNext} />
        </TextButton>
      </LeftPanel>
      <RightPanel>
        <Image src={addDescription} />
      </RightPanel>
    </Fragment>
  );
}
