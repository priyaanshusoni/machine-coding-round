import React from "react";

const CustomPagination = ({
  currPage,
  currentData,
  handlePageChange,
  totalItems,
  totalPages,
  startItem,
  endItem,
}) => {
  return (
    <div
      style={{
        marginTop: "2px",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          disabled={currPage == 1}
          onClick={() => {
            handlePageChange((currPage) => currPage - 1);
          }}
        >
          back
        </button>

        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <h4>{startItem + 1}</h4>-<h4>{endItem}</h4>
          <span>of</span>
          <h4>{totalItems}</h4>Items
        </div>

        <button
          disabled={currPage === totalPages}
          onClick={() => {
            handlePageChange((currPage) => currPage + 1);
          }}
        >
          next
        </button>
      </div>

      <div
        style={{
          padding: "2.5rem 1.5rem",
        }}
      ></div>
    </div>
  );
};

export default CustomPagination;
