import React from "react";

const Card = ({ product }) => {
  return (
    <div
      style={{
        padding: "2.5rem 1rem",
        border: "1px solid #d5d5d5",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "2rem",
        }}
      >
        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>{product.price}</span>
          <span>{Math.floor(product.rating?.rate)} stars</span>
        </div>
      </div>
    </div>
  );
};
const Products = ({ paginatedData }) => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "16px" }}> Pagination</h1>

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(3, 1fr)", // Add this line
        }}
      >
        {paginatedData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
