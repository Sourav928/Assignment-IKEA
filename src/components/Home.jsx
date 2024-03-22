import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/action.js";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      title: "MAMMUT",
      description: "Children's chair in/outdoor pink",
      weightPerKg: 2.14,
      src: "https://www.ikea.com/in/en/images/products/mammut-childrens-chair-in-outdoor-pink__0727923_pe735930_s3.jpg",
      price: 199.0,
      quantity: 1,
    },
    {
      id: 2,
      title: "MACT",
      description: "Children's chair in/outdoor pink",
      weightPerKg: 2.14,
      src: "https://www.ikea.com/in/en/images/products/mammut-childrens-chair-in-outdoor-pink__0727923_pe735930_s3.jpg",
      price: 499.0,
      quantity: 1,
    },
    {
      id: 3,
      title: "MAMSET",
      description: "Children's chair in/outdoor pink",
      weightPerKg: 2.14,
      src: "https://www.ikea.com/in/en/images/products/mammut-childrens-chair-in-outdoor-pink__0727923_pe735930_s3.jpg",
      price: 999.0,
      quantity: 1,
    },
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/shop");
  };

  return (
    <>
      <Header />
      <div className=" flex justify-center items-center">
        {products.map((product) => (
          <div className="px-2  " key={product.id}>
            <img
              className="w-48 h-48 m-2 border-solid border border-gray-400 rounded-md"
              src={product.src}
              alt="pic"
            />
            <h3 className="text-gray-800 text-md">{product.title}</h3>
            <p className="text-gray-400 text-sm">{product.description}</p>
            <p className="text-black font-bold text-md">
              Rs {product.price}.00
            </p>
            <button
              className="py-2 px-3 bg-cyan-400 mb-2  rounded-md text-sm hover:bg-cyan-600"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
