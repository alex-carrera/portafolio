import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-35 -10 220 220"
        className={classes.svgHover}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_5" data-name="Layer 5">
            <rect className="cls-1" x="110" y="-60" width="9.9" height="185" rx="3.75" transform="translate(-38.83 35.21) rotate(20)"/>
            <rect className="cls-1" x="100" y="25" width="9.9" height="175" rx="3.75" transform="translate(-38.83 35.21) rotate(-20)"/>
            <rect className="cls-1" x="125" y="-5" width="9.9" height="170" rx="3.75" transform="translate(65.78 -39.81) rotate(55)"/>
          </g>
        </g>
      </svg>
    );
};
