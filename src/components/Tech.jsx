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

      {/* Technology icons */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
