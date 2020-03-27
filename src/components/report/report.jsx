import React, { useEffect } from "react";
import styled from "styled-components";
import "./report.css";
import { gsap } from "gsap";

const SVG = styled.svg`
  width: 100%;
  visibility: hidden;
`;

function Report() {
  useEffect(() => {
    var xmlns = "http://www.w3.org/2000/svg",
      xlinkns = "http://www.w3.org/1999/xlink",
      select = function(s) {
        return document.querySelector(s);
      },
      selectAll = function(s) {
        return document.querySelectorAll(s);
      },
      allDevicesGroup = select(".allDevicesGroup"),
      tablet = select(".tablet"),
      watch = select(".watch"),
      phone = select(".phone"),
      phoneButton = select(".phoneButton"),
      computer = select(".computer"),
      computerButton = select(".computerButton"),
      phoneBars = selectAll(".phoneBars rect"),
      computerEnd = select(".computerEnd"),
      tabletContent = select(".tabletContent"),
      allTabeltIcons = selectAll(".tabletIconGroup rect"),
      tabletButton = select(".tabletButton"),
      watchContent = selectAll(".watchContent path"),
      tabletContentOutline = select(".tabletContentOutline"),
      laptopContentLine = selectAll(".tabletContentGroup line"),
      laptopContentRect = selectAll(".tabletContentGroup rect"),
      computerContent = select(".computerContent"),
      computerEndContent = select(".computerEndContent"),
      laptop = select(".laptop");

    gsap.set("svg", {
      visibility: "visible"
    });

    gsap.set(allDevicesGroup, {
      svgOrigin: "400 300",
      scale: 1.62
    });

    gsap.set(allTabeltIcons, {
      transformOrigin: "50% 50%"
    });

    var mainTl = gsap.timeline({ repeat: -1 });
    var computerTl = gsap.timeline();
    var computerContentTl = gsap.timeline();
    var computerEndContentTl = gsap.timeline();
    var computerEndTl = gsap.timeline();
    var tabletContentTl = gsap.timeline();
    var tabletTl = gsap.timeline();
    gsap.defaultEase = "sine.inOut";

    computerTl
      .to(computer, {
        duration: 4,
        drawSVG: "0% 0%"
      })
      .to(
        computerButton,
        {
          duration: 1,
          attr: {
            r: 0
          }
        },
        "-=2"
      );

    computerContentTl.to(computerContent, {
      duration: 2,
      drawSVG: "0% 0%"
    });

    computerEndContentTl.from(computerEndContent, {
      duration: 2,
      drawSVG: "0% 0%"
    });

    computerEndTl
      .fromTo(
        computer,
        {
          duration: 2,
          drawSVG: "100% 100%"
        },
        {
          duration: 2,
          drawSVG: "0% 100%",
          immediateRender: false
        }
      )
      .to(
        computerButton,
        {
          duration: 2,
          attr: {
            r: 6
          },
          ease: "elastic(0.7, 0.6)"
        },
        "-=0.2"
      );

    tabletTl
      .from(tablet, {
        duration: 4,
        drawSVG: "100% 100%"
      })
      .to(tablet, {
        duration: 4,
        drawSVG: "0% 0%"
      });

    tabletContentTl
      .from(
        laptopContentRect,
        {
          duration: 0.5,
          attr: {
            height: 0
          }
        },
        "-=0"
      )
      .from(
        laptopContentRect,
        {
          duration: 0.5,
          attr: {
            width: 0.25,
            x: 398
          }
        },
        "-=0.0"
      )
      .from(
        laptopContentLine,
        {
          duration: 0.9,
          drawSVG: "0% 0%",
          ease: "sine.inOut"
        },
        "-=0.6"
      )

      .to(laptopContentLine, {
        delay: 1,
        duration: 0.5,
        drawSVG: "0% 0%"
      })
      .to(
        laptopContentRect,
        {
          duration: 0.7,
          attr: {
            width: 0,
            x: "-=5"
          }
        },
        "-=0.5"
      );

    mainTl
      .add(computerTl, 0)
      .add(computerContentTl, 0)
      .add(tabletTl, 1.5)
      .add(tabletContentTl, 2.7)
      .add(computerEndTl, 7.5)
      .add(computerEndContentTl, 10.2);

    function doPause() {
      mainTl.pause();
    }

    //ScrubGSAPTimeline(mainTl);
  }, []);

  return (
    <SVG
      viewBox="0 0 700 600"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="iconMask">
          <rect
            className="iconMask"
            x="324.5"
            y="208"
            width="151"
            height="159"
            fill="red"
          />
        </clipPath>
      </defs>

      <g className="allDevicesGroup">
        <path
          className="computer deviceStroke"
          d="M531.25,385h-263a19,19,0,0,1-19-19V189a19,19,0,0,1,19-19h263a19,19,0,0,1,19,19V366A19,19,0,0,1,531.25,385Zm-281.5-50h301m-190,95,8.12-45m69.88,45-8.83-45m-88.17,45h114"
          fill="none"
          stroke="#bbb"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="8"
        />
        <circle
          className="computerButton deviceStroke"
          cx="400"
          cy="359.16"
          r="6"
          fill="none"
        />

        <path
          className="tablet deviceStroke"
          d="M310.5,378.5M387,198.5m59.9,222H327.1a16.6,16.6,0,0,1-16.6-16.6V196.1a16.6,16.6,0,0,1,16.6-16.6H472.9a16.6,16.6,0,0,1,16.6,16.6V403.9A16.6,16.6,0,0,1,472.9,420.5Z"
          fill="none"
          stroke="#bbb"
          strokeMiterlimit="10"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <g className="computerContentGroup deviceContent deviceStroke">
          <path
            className="computerContent"
            d="M336.75,283.5h-55.5m1-26h53.5v-53h-53.5Zm145.5,26h-55.5m1-26h53.5v-53h-53.5Zm145.5,26h-55.5m1-26h53.5v-53h-53.5Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="computerEndContent"
            d="M336.75,283.5h-55.5m1-26h53.5v-53h-53.5Zm145.5,26h-55.5m1-26h53.5v-53h-53.5Zm145.5,26h-55.5m1-26h53.5v-53h-53.5Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g
          className="tabletContentGroup deviceContent deviceStroke"
          transform="translate(0, 0)"
        >
          <line
            x1="420.5"
            y1="241.5"
            x2="477"
            y2="241.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="420.5"
            y1="264.5"
            x2="457"
            y2="264.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            className="deviceStroke"
            x="323"
            y="236"
            width="75"
            height="60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="420.5"
            y1="341.5"
            x2="477"
            y2="341.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="420.5"
            y1="364.5"
            x2="457"
            y2="364.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            className="deviceStroke"
            x="323"
            y="336"
            width="75"
            height="60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </SVG>
  );
}

export default Report;
