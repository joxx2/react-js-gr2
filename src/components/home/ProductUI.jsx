import React, { useState } from "react";

const products = [
  { id: 1, title: "Product 1", desc: "Description 1" },
  { id: 2, title: "Product 2", desc: "Description 2" },
  { id: 3, title: "Product 3", desc: "Description 3" },
  { id: 4, title: "Product 4", desc: "Description 4" }
];

function ProductUI() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    if (favorites.some(item => item.id === product.id)) {
      setFavorites(favorites.filter(item => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const isFavorite = (id) => favorites.some(item => item.id === id);

  const HeartIcon = ({ isFilled }) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill={isFilled ? "#e74c3c" : "none"}
      stroke={isFilled ? "#e74c3c" : "#333"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer", transition: "all 0.2s" }}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              width: "190px",
              padding: "12px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}
          >
            <h4 style={{ margin: "10px 0 5px" }}>{p.title}</h4>
            <p style={{ fontSize: "14px", color: "#666" }}>{p.desc}</p>

            <div
              onClick={() => toggleFavorite(p)}
              style={{ display: "inline-block", marginTop: "8px" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <HeartIcon isFilled={isFavorite(p.id)} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>Favorites ({favorites.length})</h3>
        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          favorites.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                margin: "8px 0",
                padding: "12px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>{item.title}</span>
              <button
                onClick={() =>
                  setFavorites(favorites.filter(f => f.id !== item.id))
                }
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer"
                }}
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductUI;