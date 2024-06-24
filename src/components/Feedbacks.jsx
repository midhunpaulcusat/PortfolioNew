import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";

const FeedbackCard = ({
  index,
  course,
  college,
  city,
  grade,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[28px]'>{course}</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{college}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>{city}</span> 
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {grade}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${college}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Education is the foundation upon which we build our future.</p>
          <h2 className={styles.sectionHeadText}>Education</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {educations.map((education, index) => (
          <FeedbackCard key={education.course} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");