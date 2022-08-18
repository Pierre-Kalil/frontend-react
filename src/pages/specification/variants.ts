const transition = { duration: 0.5, ease: "easeInOut" };

export const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition },
};
