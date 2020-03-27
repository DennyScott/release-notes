import React, { useEffect } from "react";
import "./build-on-progress.css";

function BuildInProgress() {
  return (
    <svg
      version="1.1"
      id="svg-animation-example"
      className="svg-line-drawing rtl-magazine-animation"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      width="720"
      height="310"
      viewBox="0 0 720 310"
      xmlSpace="preserve"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="mask-page">
          <path
            className="stroke-alt stroke-width linecap"
            d="m240,275 l240,0 0,-217 -240,0z"
          />
        </clipPath>
      </defs>

      <g clipPath="url(#mask-page)">
        <g className="ani-move-page is-animated">
          <path
            className="stroke stroke-width linecap"
            d="m0,275 m254,-203 l212,0 0,112 -212,0z"
            fill="none"
          />
          <path
            className="stroke-alt stroke-width linecap"
            d="m0,275 m272,-172 a13 13 180 0 1 26,0 a13 13 180 0 1 -26,0"
            fill="none"
          />
          <path
            className="stroke stroke-width linecap"
            d="m0,275 m254,-203 m22,112 l34,-44 a9 9 180 0 1 13,-1 l15,16 38,-48 a5 5 180 0 1 8.4,0 l60,77"
            fill="none"
          />
          <path
            className="stroke stroke-width linecap"
            d="m0,275 m254,-67 l212,0 m-212,10 l54,0 m25,0 l54,0 m25,0 l54,0 m-212,10 l54,0 m25,0 l54,0 m25,0 l54,0"
            fill="none"
          />

          <path
            className="stroke stroke-width linecap"
            d="m350,250 a10 10 180 0 1 20,0 a10 10 180 0 1 -20,0 m6.8,-1.7 l3.2,3.2 3.2,-3.2"
            fill="none"
          />
          <path
            className="stroke stroke-width linecap"
            d="m318,290 l0,430"
            fill="none"
          />
          <path
            className="stroke stroke-width linecap"
            d="m333,306 l54,0 m-54,10 l54,0 m-54,10 l133,0 m-133,10 l133,0"
            fill="none"
          />
          <path
            className="stroke stroke-width linecap"
            d="m333,356 l133,0 0,78 -133,0 0,-78 m0,90 l54,0 m-54,10 l54,0 m-54,20 133,0 0,78 -133,0 0,-78 m0,90 l54,0 m-54,10 l54,0 m-54,20 133,0 0,78 -133,0 0,-78 m0,90 l54,0 m-54,10 l54,0 m-54,20"
            fill="none"
          />

          <path
            className="stroke stroke-width linecap"
            d="m0,680 m0,275 m254,-203 l212,0 0,112 -212,0z"
            fill="none"
          />
          <path
            className="stroke-alt stroke-width linecap"
            d="m0,680 m0,275 m272,-172 a13 13 180 0 1 26,0 a13 13 180 0 1 -26,0"
            fill="none"
          />
          <path
            className="stroke stroke-width linecap"
            d="m0,680 m0,275 m254,-203 m22,112 l34,-44 a9 9 180 0 1 13,-1 l15,16 38,-48 a5 5 180 0 1 8.4,0 l60,77"
            fill="none"
          />
          <path
            className="stroke stroke-width linecap"
            d="m0,680 m0,275 m254,-67 l212,0 m-212,10 l54,0 m25,0 l54,0 m25,0 l54,0 m-212,10 l54,0 m25,0 l54,0 m25,0 l54,0"
            fill="none"
          />

          <path
            className="stroke stroke-width linecap"
            d="m0,680 m350,250 a10 10 180 0 1 20,0 a10 10 180 0 1 -20,0 m6.8,-1.7 l3.2,3.2 3.2,-3.2"
            fill="none"
          />
        </g>
        <g className="ani-move-menu is-animated">
          <g>
            <path
              className="stroke stroke-width linecap"
              d="m254,306 l54,0 m-54,10 l54,0 m-54,10 l54,0 m-54,10 l54,0"
              fill="none"
            />
          </g>
        </g>
      </g>

      <g className="ani-fade-button is-animated" opacity="0">
        <path
          className="stroke-background stroke-overlay linecap"
          d="m350,250 a10 10 180 0 1 20,0 a10 10 180 0 1 -20,0 m6.8,-1.7 l3.2,3.2 3.2,-3.2"
          fill="none"
        />
        <path
          className="stroke-alt stroke-width linecap"
          d="m350,250 a10 10 180 0 1 20,0 a10 10 180 0 1 -20,0 m6.8,-1.7 l3.2,3.2 3.2,-3.2"
          fill="none"
        />
      </g>

      <path
        className="stroke stroke-width linecap"
        d="m0,275 l240,0 0,-230 a5 5 90 0 1 5,-5 l230,0 a5 5 90 0 1 5,5 l0,230 240,0"
        fill="none"
      />
      <path
        className="stroke stroke-width linecap"
        d="m0,275 m240,-217 l240,0"
        fill="none"
      />
      <path
        className="stroke stroke-width linecap"
        d="m0,275 m240,-226 m10,0 a4 4 180 0 1 8,0 a4 4 180 0 1 -8,0 m14,0 a4 4 180 0 1 8,0 a4 4 180 0 1 -8,0 m14,0 a4 4 180 0 1 8,0 a4 4 180 0 1 -8,0"
        fill="none"
      />
    </svg>
  );
}

export default BuildInProgress;
