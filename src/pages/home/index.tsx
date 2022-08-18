import "./styles.scss";

import useProducts from "../../hooks/useProducts";

import { motion } from "framer-motion";

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } },
};

const Home = () => {
  const { products, filteredProducts, search, setSearch } = useProducts();

  return (
    <section className="home-container">
      <aside>
        <input placeholder="Pesquise por produto ou categoria" />
      </aside>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
        {(search.length > 0 ? filteredProducts : products).map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </motion.div>
    </section>
  );
};

export default Home;
