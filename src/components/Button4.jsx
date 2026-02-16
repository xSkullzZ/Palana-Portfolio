import * as React from "react";
import { PlasmicButton4 } from "./plasmic/portfolio/PlasmicButton4";

const Button4 = React.forwardRef(function Button4(props, ref) {
  const { plasmicProps } = PlasmicButton4.useBehavior(props, ref);
  return <PlasmicButton4 {...plasmicProps} />;
});

Button4.__plumeType = "button";

export default Button4;
