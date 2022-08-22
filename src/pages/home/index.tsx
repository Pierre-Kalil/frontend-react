import "./styles.scss";
import { motion } from "framer-motion";
import { homeVariants } from "./variants";
import useProducts from "../../hooks/useProducts";
import { Input } from "../../components/input";
import { CardProduct } from "../../components/cardProduct";
import Header from "../../components/header";

const Home = () => {
  const {
    products,
    filteredProducts,
    search,
    setSearch,
    handleNextPage,
    handlePreviousPage,
  } = useProducts();

  return (
    <>
      <Header />
      <section className="home-container">
        <aside className="input-home">
          <Input
            placeholder="Pesquise por produto ou categoria"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </aside>
        <div className="button-home">
          <button id="previous" onClick={handlePreviousPage}>
            Anterior
          </button>
          <button id="next" onClick={handleNextPage}>
            Próximo
          </button>
        </div>

        <motion.aside
          initial="initial"
          animate="enter"
          exit="exit"
          variants={homeVariants}
          className="container-cards"
        >
          {(search.length > 0 ? filteredProducts : products).map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </motion.aside>
      </section>
    </>
  );
};

export default Home;
