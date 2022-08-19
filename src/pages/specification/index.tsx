import "./styles.scss";

import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { postVariants } from "./variants";
import useProducts from "../../hooks/useProducts";
import Header from "../../components/header";

export const Specification = () => {
  const { productId } = useParams();
  const { products } = useProducts();

  const product = products.find((product) => product.id === productId);

  return (
    <>
      <Header />
      <motion.div
        className="specification-container"
        initial="exit"
        animate="enter"
        exit="exit"
        variants={postVariants}
      >
        <Link to="/">Voltar</Link>
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
    </>
  );
};
