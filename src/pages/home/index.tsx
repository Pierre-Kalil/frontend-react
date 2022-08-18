import "./styles.scss";

import useProducts from "../../hooks/useProducts";

import { motion } from "framer-motion";
import { CardProduct } from "../../components/cardProduct";
import { blogVariants } from "./variants";

const Home = () => {
  const { products, filteredProducts, search, setSearch } = useProducts();
  console.log(products);
  return (
    <section className="home-container">
      <aside>
        <input
          placeholder="Pesquise por produto ou categoria"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </aside>
      <motion.aside
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
        className="container-cards"
      >
        {(search.length > 0 ? filteredProducts : products).map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </motion.aside>
    </section>
  );
};

export default Home;
