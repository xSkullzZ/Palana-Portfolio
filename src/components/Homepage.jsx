import * as React from "react";
import ContactFormCard from "./ContactFormCard";
import { PlasmicHomepage } from "./plasmic/portfolio/PlasmicHomepage";

function Homepage_(props, ref) {
  const mergedOverrides = {
    ...props.overrides,
    contact: {
      ...(props.overrides?.contact || {}),
      children: <ContactFormCard />,
    },
  };

  return <PlasmicHomepage root={{ ref }} {...props} overrides={mergedOverrides} />;
}

const Homepage = React.forwardRef(Homepage_);

export default Homepage;
