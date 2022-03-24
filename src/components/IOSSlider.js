import React from "react";
import { withStyles, } from "@material-ui/styles";
import {
  Box
} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const marks = [
  {
    value: 0,
  },
  {
    value: 2500,
  },
  {
    value: 7500,
  },
  {
    value: 10000,
  },
];
// function valuetext(value) {
//   return `${value}°C`;
// }
const IOSSlider = withStyles({
  root: {
    color: "#FABE25!important",
    height: 12,
    padding: "15px 0",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -8,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#fff",
    },
  },
  track: {
    height: 9,
  },
  rail: {
    height: 9,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 20,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);
<Box mt={4}>
<IOSSlider
aria-label="ios slider"
defaultValue={60}
marks={marks}
valueLabelDisplay="on"
/>
</Box> 

export default IOSSlider;
