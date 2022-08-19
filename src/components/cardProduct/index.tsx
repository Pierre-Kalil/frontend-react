import "./styles.scss";
import { motion } from "framer-motion";
import { ICardProductProps } from "../../types/types";
import { postPreviewVariants } from "./variants";
import { Link } from "react-router-dom";

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
        <Link to={`/product/${product.id}`}>Especificações</Link>
      </div>
    </motion.div>
  );
};
