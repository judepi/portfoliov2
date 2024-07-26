import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: {
    width: "calc(100% - 0.75rem)",
  },
};
export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? " bg-slate-200 rounded-xl" : "text-white";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-bold md:text-2xl hover:text-blue-600 text-primary ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={"h-1 bg-text-light mt-2 mr-3"}
      ></motion.div>
    </button>
  );
};
