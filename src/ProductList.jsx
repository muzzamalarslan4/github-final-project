import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8b2f6c9?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Monstera",
    price: 25,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594575922-bf3b4a8e7e8a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 30,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Calathea",
    price: 22,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1601985705806-5b8f7e9e7e7e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Cactus",
    price: 12,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 14,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 16,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>
      <p className="product-intro">
        Explore our beautiful collection of plants and bring nature into your
        home.
      </p>

      {categories.map((category) => (
        <section key={category} className="product-category">
          <h2>{category}</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <h3>{product.name}</h3>

                  <p className="product-price">
                    ${product.price}
                  </p>

                  <p>
                    Beautiful and healthy {product.name} for your home.
                  </p>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
