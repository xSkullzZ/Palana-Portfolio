/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1200 146"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M0 56.214C55.628 41.31 73.5 19.792 144.5 19.792s80 49.5 177 49.5 125-35.495 211-39.5c80-3.727 121.5 42.273 201.5 46S880 4.046 960 .319c80-3.726 160 26.085 200 40.99l40 14.905v89.432H0z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
