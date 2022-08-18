import "./styles.scss";

import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { postVariants } from "./variants";
import useProducts from "../../hooks/useProducts";

export const Specification = () => {
  const { productId } = useParams();
  const { products } = useProducts();

  const product = products.find((product) => product.id === productId);

  return (
    <motion.div
      className="specification-container"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={postVariants}
    >
      <div>
        <Link to="/">Voltar</Link>
      </div>
      <div className="specification">
        <img
          className="specification-img"
          src={product?.images[0].asset.url}
          alt={product?.name}
        />
        <div className="specification-text">
          <h2>{product?.name}</h2>
          <p>{product?.shortDescription}</p>
        </div>
      </div>
    </motion.div>
  );
};
