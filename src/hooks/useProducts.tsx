import { useEffect, useState } from "react";

import productsCategory from "../database/productsCategory.json";

import { IProductsProps } from "../types/types";

const useProducts = () => {
  const [products, setProducts] = useState<IProductsProps[]>(
    productsCategory.data.nodes
  );
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   setProducts(productsCategory.data.nodes);
  // }, []);

  const filteredProducts =
    search.length > 0
      ? products.filter(
          (product) =>
            product.category.name.toLowerCase().includes(search) ||
            product.name.toLowerCase().includes(search)
        )
      : [];

  return {
    products,
    filteredProducts,
    setSearch,
    search,
  };
};

export default useProducts;
