"use client";

import React, { Profiler } from "react";
import CustomPagination from "@/components/CustomPagination";
import Products from "@/components/Products";
import usePagination from "@/hooks/usePagination";
const Home = ({ data }) => {
  const {
    currPage,
    currentData,
    handlePageChange,
    totalItems,
    totalPages,
    startItem,
    endItem,
  } = usePagination(data, 3);
  return (
    <>
      <Products paginatedData={currentData} />
      <CustomPagination
        currPage={currPage}
        handlePageChange={handlePageChange}
        totalItems={totalItems}
        totalPages={totalPages}
        startItem={startItem}
        endItem={endItem}
      />
    </>
  );
};

export default Home;
