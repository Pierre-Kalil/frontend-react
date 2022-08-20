import "./styles.scss";
import { motion } from "framer-motion";
import { ICardProductProps } from "../../types/types";
import { postPreviewVariants } from "./variants";
import { useNavigate } from "react-router-dom";

export const CardProduct = ({ product }: ICardProductProps) => {
  const navigation = useNavigate();
  return (
    <div className="card-hover">
      <motion.div
        onClick={() => navigation(`/product/${product.id}`)}
        className="card-container"
        variants={postPreviewVariants}
      >
        <img
          className="card-img"
          src={product?.images[0].asset.url}
          alt={product.name}
        />

        <div className="card-text">
          <p className="heading">{product.name}</p>
        </div>
      </motion.div>
    </div>
  );
};
