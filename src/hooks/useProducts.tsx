import { useEffect, useState } from "react";

import productsCategory from "../database/productsCategory.json";

import { IProductsProps } from "../types/types";

const PER_PAGE = 10;

const useProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;

  const [products, setProducts] = useState<IProductsProps[]>(
    productsCategory.data.nodes.slice(offset, offset + PER_PAGE)
  );
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(productsCategory.data.nodes.slice(offset, offset + PER_PAGE));
    setTotalPages(products.length / PER_PAGE);
  }, [currentPage]);

  const filteredProducts =
    search.length > 0
      ? productsCategory.data.nodes.filter((product) => {
          const regex = new RegExp(search.toUpperCase(), "g");
          return (
            product.category.name.toUpperCase().match(regex) ||
            product.name.toUpperCase().match(regex)
          );
        })
      : [];

  const handleNextPage = () => {
    if (products.length < 9) {
      return;
    }
    setCurrentPage((state) => state + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage((state) => state - 1);
  };

  return {
    products,
    filteredProducts,
    setSearch,
    search,
    handleNextPage,
    currentPage,
    setCurrentPage,
    handlePreviousPage,
    setProducts,
  };
};

export default useProducts;
