export const spring = {
  initial: {
    scale: 0,
  },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 30,
    duration: 0.2,
    ease: "easeOut",
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeIn" },
};
