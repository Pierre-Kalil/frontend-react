import "./styles.scss";
import { motion } from "framer-motion";
import { ICardProductProps } from "../../types/types";

const postPreviewVariants = {
  initial: { x: "10%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { dealy: 0 } },
  exit: {
    x: "-10%",
    opacity: 0,
    transition: { dealy: 0 },
  },
};

export const CardProduct = ({ product }: ICardProductProps) => {
  return (
    <motion.div className="card-container" variants={postPreviewVariants}>
      <img
        className="card-img"
        src={product?.images[0].asset.url}
        alt={product.name}
      />
      <div className="card-text">
        <p className="heading">{product.name}</p>
        {/* <p>{product.shortDescription}</p> */}
        {/* <Link to={`/post/${product.id}`}>Learn more</Link> */}
      </div>
    </motion.div>
  );
};
