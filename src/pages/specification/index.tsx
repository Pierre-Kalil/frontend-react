import "./styles.scss";

import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { postVariants } from "./variants";
import Header from "../../components/header";
import { IProductsProps } from "../../types/types";

import productCategory from "../../database/productsCategory.json";

export const Specification = () => {
  const { productId } = useParams();

  const product: IProductsProps | any =
    productId?.length &&
    productCategory.data.nodes.find((product) => product.id == productId);

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
            src={"../" + product?.images[0].asset.url}
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
