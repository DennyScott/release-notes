import React from "react";
import Welcome from "./steps/welcome";
import { Body } from "./steps/layout";
import { Next } from "./steps/layout";
import working from "../../images/working.jpg";
import addDescription from "../../images/adddescription.png";
import description from "../../images/description.png";
import finalize from "../../images/finalize.png";
import order from "../../images/order.png";
import Repos from "./steps/repos";
import Order from "./steps/order";
import Name from "./steps/name";
import Finalize from "./steps/finalize";

function Builder({ step, setStep }) {
  return (
    <Body>
      {step === 0 && <Welcome onNext={() => setStep(1)} />}{" "}
      {step === 1 && <Repos onNext={() => setStep(2)} />}
      {step === 2 && <Order onNext={() => setStep(3)} />}
      {step === 3 && <Name onNext={() => setStep(4)} />}
      {step === 4 && <Finalize />}
    </Body>
  );
}

export default Builder;
