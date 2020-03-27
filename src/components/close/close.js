import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import "./close.css";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";

const SVG = styled.svg`
  margin-top: 1rem;
`;

const SVGContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Close({ close }) {
  const middleArrow = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();

  useEffect(() => {
    var loaderSVG = document.querySelector(".loader-svg");
    var container = document.querySelector(".container");
    var arrowMiddleNull = document.querySelector(".arrow-middle-null");
    var arrowRightNull = document.querySelector(".arrow-right-null");
    var arrowLeftNull = document.querySelector(".arrow-left-null");
    var arrowHead = document.querySelector(".arrow-head");
    var arrowLine = document.querySelector(".arrow-line");
    var outline = document.querySelector(".outline");
    var outlineBg = document.querySelector(".outline-bg");
    var allLines = document.querySelector(".all-lines");
    var isDevice = /android|webos|iphone|ipad|ipod|blackberry/i.test(
      navigator.userAgent.toLowerCase()
    );

    gsap.set(arrowMiddleNull, { x: "+=0" });
    gsap.set(arrowRightNull, { x: "+=0" });
    gsap.set(arrowLeftNull, { x: "+=0" });

    if (!isDevice) {
      gsap.set(allLines, {
        filter: "url(#glow)"
      });
    }
    gsap.set(arrowLeftNull, {
      x: 57.5,
      y: 103
    });

    gsap.set(arrowMiddleNull, {
      x: 90,
      y: 135.5
    });
    gsap.set(arrowRightNull, {
      x: 122.5,
      y: 103
    });

    var tl = new gsap.timeline({ paused: true, onUpdate: updateSVG });

    tl.set(outline, {
      alpha: 0
    })
      .set(outline, {
        drawSVG: "49.8% 49.9%"
      })
      .to(arrowLine, 0.6, {
        drawSVG: "59% 60%",
        ease: "Power3.inOut"
      })

      .to(arrowMiddleNull, {
        duration: 0.6,
        y: 103,
        ease: "elastic"
      })

      .to(
        arrowLine,
        {
          duration: 0.5,
          y: "-=95",
          ease: "power1"
        },
        "-=0.55"
      )

      .to(arrowLine, {
        duration: 0.2,
        y: "+=17",
        ease: "power1.in"
      })
      .set(arrowLine, {
        alpha: 0
      })
      .set(outline, {
        alpha: 1
      })

      .to(outline, {
        duration: 3,
        drawSVG: "0% 100%",
        ease: "none"
      })
      //shrinks the line
      .to(
        arrowLeftNull,
        {
          duration: 3,
          x: "+=32.5",
          ease: "none"
        },
        "-=3"
      )
      .to(
        arrowRightNull,
        {
          duration: 3,
          x: "-=32.5",
          ease: "none"
        },
        "-=3"
      )

      .to(arrowLeftNull, {
        duration: 0.6,
        x: "-=30",
        y: "-=5",
        delay: 0.4,
        ease: "back"
      })
      .to(
        arrowMiddleNull,
        {
          duration: 0.6,
          y: "+=15",
          ease: "back"
        },
        "-=0.6"
      )
      .to(
        arrowRightNull,
        {
          duration: 0.6,
          x: "+=32.5",
          y: "-=35",
          ease: "back"
        },
        "-=0.6"
      )

      .to(
        arrowHead,
        {
          duration: 0.6,
          stroke: "#2EC26A"
        },
        "-=0.6"
      )
      .to(outline, {
        duration: 0.5,
        drawSVG: "49.8% 49.9%",
        delay: 1
      })

      .set(outline, {
        alpha: 0
      })
      .set(arrowLine, {
        alpha: 1
      })

      .to(arrowLine, {
        duration: 0.3,
        y: "+=95",
        //drawSVG:'0% 100%',
        ease: "power1.in"
      })
      .to(arrowLine, {
        duration: 0.6,
        y: "-=18",
        drawSVG: "0% 100%",

        ease: "power2.inOut"
      })
      .to(
        arrowHead,
        {
          duration: 0.6,
          stroke: "#ddd"
        },
        "-=0.6"
      )
      .to(
        arrowLeftNull,
        {
          duration: 0.6,
          x: 57.5,
          y: 103,
          //delay:1,
          ease: "power3"
        },
        "-=0.6"
      )
      .to(
        arrowMiddleNull,
        {
          duration: 0.6,
          x: 90,
          y: 135.5,
          ease: "power3"
        },
        "-=0.6"
      )
      .to(
        arrowRightNull,
        {
          duration: 0.6,
          x: 122.5,
          y: 103,
          ease: "power3"
        },
        "-=0.6"
      );

    function updateSVG() {
      //console.log(arrowMiddleNull._gsTransform.y)
      var leftX = gsap.getProperty(arrowLeftNull, "x");
      var leftY = gsap.getProperty(arrowLeftNull, "y");
      var middleX = gsap.getProperty(arrowMiddleNull, "x");
      var middleY = gsap.getProperty(arrowMiddleNull, "y");
      var rightX = gsap.getProperty(arrowRightNull, "x");
      var rightY = gsap.getProperty(arrowRightNull, "y");

      var pointStr =
        leftX +
        "," +
        leftY +
        " " +
        middleX +
        "," +
        middleY +
        " " +
        rightX +
        ", " +
        rightY;

      //console.log(pointStr)
      gsap.set(arrowHead, {
        attr: {
          points: pointStr
        }
      });
    }

    loaderSVG.onclick = function() {
      tl.restart();
      setTimeout(() => close(), 8500);
    };
  }, []);

  return (
    <SVGContainer>
      <SVG className="loader-svg" version="1.1" viewBox="0 0 180 180">
        <defs>
          <filter id="glow" y="-50%" height="180%">
            <feGaussianBlur stdDeviation="2 2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="all-lines">
          <path
            className="outline"
            fill="none"
            stroke="#ededed"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M90.5,161C51.6,161,20,129.4,20,90.5S51.6,20,90.5,20S161,51.6,161,90.5S129.4,161,90.5,161"
          />
          <path
            className="outline-bg"
            fill="none"
            stroke="#ededed"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M90.5,161C51.6,161,20,129.4,20,90.5S51.6,20,90.5,20S161,51.6,161,90.5S129.4,161,90.5,161"
          />
          <polyline
            className="arrow-head"
            fill="none"
            stroke="#ddd"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            points="
   122.5,103 90,135.5 57.5,103 "
          />
          <line
            className="arrow-line"
            fill="none"
            stroke="#ddd"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            x1="90"
            y1="52"
            x2="90"
            y2="135"
          />
        </g>
      </SVG>
      <div className="arrow-left-null" ref={leftArrow}></div>
      <div className="arrow-middle-null" ref={middleArrow}></div>
      <div className="arrow-right-null" ref={rightArrow}></div>
    </SVGContainer>
  );
}

export default Close;
