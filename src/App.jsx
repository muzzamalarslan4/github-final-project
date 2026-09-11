import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [page, setPage] = useState("home");

  const goToProducts = () => {
    setPage("products");
  };

  const goHome = () => {
    setPage("home");
  };

  const goToAbout = () => {
    setPage("about");
  };

  const goToCart = () => {
    setPage("cart");
  };

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo" onClick={goHome}>
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">
          <button onClick={goHome}>Home</button>
          <button onClick={goToAbout}>About Us</button>
          <button onClick={goToProducts}>Plants</button>
          <button onClick={goToCart}>🛒 Cart</button>
        </div>
      </nav>

      {/* Home / Landing Page */}
      {page === "home" && (
        <section className="landing-page">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>

            <h2>Your Online Plant Shop</h2>

            <p>
              Bring nature into your home with beautiful and healthy plants.
              Explore our collection and find the perfect plant for your space.
            </p>

            <button className="get-started" onClick={goToProducts}>
              Get Started
            </button>
          </div>
        </section>
      )}

      {/* About Us Page */}
      {page === "about" && (
        <section className="page-section">
          <AboutUs />
        </section>
      )}

      {/* Product Listing Page */}
      {page === "products" && (
        <section className="page-section">
          <ProductList />
        </section>
      )}

      {/* Shopping Cart Page */}
      {page === "cart" && (
        <section className="page-section">
          <CartItem />
        </section>
      )}

    </div>
  );
}

export default App;
