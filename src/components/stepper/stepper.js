import React, { useEffect } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { gsap } from "gsap";

const FILL_COLOR = theme.primaryColor;
const SVG = styled.svg`
  width: 500px;
  height: 200px;
  visibility: hidden;
  max-width: 1000px;

  #circleGroup,
  #joinLine {
    stroke: ${FILL_COLOR};
  }
  circle {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

function Stepper({ step, setStep }) {
  const SIZE = 20;

  useEffect(() => {
    gsap.set("svg", {
      visibility: "visible"
    });
  });

  useEffect(() => {
    onStepClick(step, false);
  }, [step]);

  const stepMap = {
    0: 260,
    1: 330,
    2: 400,
    3: 470,
    4: 540
  };

  const onStepClick = (step, update = true) => {
    var tl = gsap.timeline();
    tl.to("#joinLine", {
      duration: 0.3,
      attr: {
        x2: stepMap[step]
      },
      strokeWidth: 0,
      ease: "power2.easeIn"
    })
      .to(
        "#joinLine",
        1,
        {
          attr: {
            x1: stepMap[step]
          },
          ease: "elastic(1, 0.76)"
        },
        "+=0"
      )
      .to(
        "#joinLine",
        {
          duration: 2,
          strokeWidth: SIZE,
          ease: "elastic(1, 0.8)"
        },
        "-=1"
      );

    tl.timeScale(2);
    if (update) setStep(step);
  };
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 600"
    >
      <defs>
        <mask id="radioMask">
          <g
            fill={FILL_COLOR}
            strokeWidth="5"
            stroke="777777"
            strokeMiterlimit="10"
          >
            <circle onClick={() => onStepClick(0)} cx="260" cy="300" r="23" />
            <circle onClick={() => onStepClick(1)} cx="330" cy="300" r="23" />
            <circle onClick={() => onStepClick(2)} cx="400" cy="300" r="23" />
            <circle onClick={() => onStepClick(3)} cx="470" cy="300" r="23" />
            <circle onClick={() => onStepClick(4)} cx="540" cy="300" r="23" />
          </g>
        </mask>
      </defs>
      <g id="mainGroup" mask="url(#radioMask)">
        <g
          id="circleGroup"
          fill="transparent"
          strokeWidth="4"
          strokeMiterlimit="10"
        >
          <circle onClick={() => onStepClick(0)} cx="260" cy="300" r="23" />
          <circle onClick={() => onStepClick(1)} cx="330" cy="300" r="23" />
          <circle onClick={() => onStepClick(2)} cx="400" cy="300" r="23" />
          <circle onClick={() => onStepClick(3)} cx="470" cy="300" r="23" />
          <circle onClick={() => onStepClick(4)} cx="540" cy="300" r="23" />
        </g>
        <line
          id="joinLine"
          fill={FILL_COLOR}
          strokeWidth="20"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="260"
          y1="300"
          x2="260"
          y2="300"
        />
      </g>
    </SVG>
  );
}

export default Stepper;
