"use client"
import React from "react";
import { skillsData } from "../../../constant";
import { motion ,i} from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};
const MySkills = () => {
  return (
    <section id="skills" className="mb-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 my-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default MySkills;
