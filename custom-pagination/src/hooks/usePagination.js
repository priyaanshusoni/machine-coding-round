"use client";

import React from "react";

import { useState } from "react";
const usePagination = (data, itemsPerPage = 10) => {
  const [currPage, setCurrPage] = useState(1);

  const totalItems = data?.length; //20

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startItem = (currPage - 1) * itemsPerPage;
  const endItem = Math.min(startItem + itemsPerPage, totalItems);

  const currentData = data.slice(startItem, endItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= totalPages && pageNumber <= 1) {
      return;
    }

    setCurrPage(pageNumber);
  };

  return {
    currPage,
    totalItems,
    totalPages,
    currentData,
    handlePageChange,
    startItem,
    endItem,
  };
};

export default usePagination;
