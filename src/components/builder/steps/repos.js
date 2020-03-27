import React, { Fragment } from "react";
import Repos from "../../repos";
import {
  LeftPanel,
  RightPanel,
  Image,
  Step,
  Title,
  Description,
  Next
} from "./layout";
import description from "../../../images/description.png";

function RepoLayout({ onNext }) {
  return (
    <Fragment>
      <LeftPanel small>
        <Step>Step 2</Step>
        <Title>Select your repos!</Title>
        <Description>
          Select the repo's you'd like to include in your release notes. If you
          don't see the repos, you haven't given the correct github permissions.
        </Description>
        <Next onNext={onNext} />
      </LeftPanel>
      <RightPanel large>
        <Repos />
      </RightPanel>
    </Fragment>
  );
}

export default RepoLayout;
