"use client";
import { useState } from "react";
import Image from "next/image";
import { Crushed } from "next/font/google";
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
          <span>{Math.floor(product.rating)} stars</span>
        </div>
      </div>
    </div>
  );
};

function Pagination({ products }) {
  const PAGE_SIZE = 10;
  const total_products = products.length;
  const no_of_pages = Math.ceil(total_products / PAGE_SIZE);

  const [currPage, setcurrPage] = useState(1);

  const startIndex = (currPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  return (
    <div>
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
        {products.slice(startIndex, endIndex).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination UI */}

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
              setcurrPage((p) => p - 1);
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
            <h4>{startIndex + 1}</h4>-<h4>{endIndex}</h4>
            <span>of</span>
            <h4>{products.length}</h4>Items
          </div>

          <button
            disabled={currPage === no_of_pages}
            onClick={() => {
              setcurrPage((p) => p + 1);
            }}
          >
            next
          </button>
        </div>

        <div
          style={{
            padding: "2.5rem 1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",

              gap: "0.5rem",
            }}
          >
            {Array.from({ length: no_of_pages }).map((x, index) => (
              <div
                onClick={() => setcurrPage(index + 1)}
                style={{
                  padding: "2px",
                  border: "1px solid black",
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
