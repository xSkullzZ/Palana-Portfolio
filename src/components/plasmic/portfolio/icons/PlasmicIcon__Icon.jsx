/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-212.4 0 2499.8 2499.8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M0 2016.6V496.8L1344.4 0 2075 233.7v2045.9l-730.6 220.3zl1344.4 161.8V409.2L467.6 613.8v1198.3z"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
