const transition = { duration: 0.5, ease: "easeInOut" };

export const postPreviewVariants = {
  initial: { x: "10%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: {
    x: "-10%",
    opacity: 0,
    transition,
  },
};
