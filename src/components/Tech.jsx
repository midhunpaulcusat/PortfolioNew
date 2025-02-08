import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Import the animation variant and styles
import { textVariant } from "../utils/motion"; // Adjust the path as needed
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* Animated header */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      {/* Technology icons with titles */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            {/* Title displayed below the icon */}
            <p className="mt-2 text-center text-white text-sm">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
