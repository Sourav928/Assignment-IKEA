import React from "react";
import { BsTruck } from "react-icons/bs";
import { MdOutlineStore } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import PriceSection from "./PriceSection";

import { BsArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions/action";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import Header from "./Header";

const ShoppingBag = () => {
  const products = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncrement = (product) => {
    dispatch(
      updateQuantity({ id: product.id, quantity: product.quantity + 1 })
    );
  };
  const handleDecrement = (product) => {
    if (product.quantity === 1) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(
        updateQuantity({
          id: product.id,
          quantity: Math.max(0, product.quantity - 1),
        })
      );
    }
  };

  return (
    <div>
      <Header />
      {products.length === 0 ? (
        <>
          <EmptyCart />
        </>
      ) : (
        <>
          <div className=" flex w-4/5 m-auto  ">
            <div className=" w-3/5">
              <h1 className="text-4xl font-bold m-4 mb-8">Shopping Bag</h1>
              <div className="m-4">
                <h3 className="text-md font-bold mb-4">
                  How would you like to receive your order?
                </h3>
                <div className="flex justify-start">
                  <button className="bg-white w-full  p-6 m-2 rounded-sm flex items-start justify-start border-solid border-2 border-gray-200 hover:border-black">
                    <span className=" flex justify-center items-center">
                      <BsTruck /> <span className="pl-2">Delivery</span>
                    </span>
                  </button>
                  <button className="bg-white w-full  p-6 m-2 rounded-sm flex items-start justify-start border-solid border-2 border-gray-200 hover:border-black">
                    <span className=" flex justify-center items-center">
                      <MdOutlineStore /> <span className="pl-2">Collect</span>
                    </span>
                  </button>
                </div>
                {products.map((product) => (
                  <div key={product.id} className=" flex mt-4">
                    <img
                      className="min-w-6"
                      src="https://www.ikea.com/in/en/images/products/mammut-childrens-chair-in-outdoor-pink__0727923_pe735930_s3.jpg"
                      alt="pic"
                    />
                    <div className=" w-full flex flex-col justify-between">
                      <div className="  flex justify-between m-0 ">
                        <div className="p-2">
                          <h4>{product.title}</h4>
                          <p className="text-sm">{product.description}</p>
                          <p className="text-sm">
                            {product.weightPerKg} per price
                          </p>
                        </div>
                        <div className="p-2 font-bold">Rs.{product.price}</div>
                      </div>

                      <div className=" my-2 flex items-center">
                        <div className="flex items-center mr-2">
                          <button
                            className="w-10 h-10 rounded-l-lg bg-blue-500 text-white  flex justify-center items-center"
                            onClick={() => handleDecrement(product)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={product.quantity}
                            readOnly
                            className="w-16 h-10 text-center border border-gray-300 rounded-none"
                          />
                          <button
                            className="w-10 h-10 rounded-r-lg bg-blue-500 text-white  flex justify-center items-center"
                            onClick={() => handleIncrement(product)}
                          >
                            +
                          </button>
                        </div>

                        <button className="pr-8">
                          <AiOutlineHeart size={20} />
                        </button>
                        <button
                          onClick={() => handleRemove(product)}
                          className="pr-8"
                        >
                          <RiDeleteBin6Line size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-2/5">
              <PriceSection />

              <div className="flex justify-center items-center border-solid border border-gray-300 p-8 rounded my-4 text-sm font-bold w-full m-auto">
                <p>Delivery estimate will be available on the next page.</p>
              </div>
              <div className="bg-[#0058a3] text-white flex justify-between items-center border-solid border border-gray-300 p-8 rounded my-4 text-md font-bold w-full m-auto">
                <Link to={"/pin"}>
                  <button>Continue to checkout</button>
                </Link>
                <span>
                  <BsArrowRightCircleFill size={40} />
                </span>
              </div>
              <span className="block text-sm text-gray-400 underline py-4">
                <a href="w">Return policy</a>
              </span>
              <span className="block text-sm text-gray-400 underline pb-8">
                <a href="w">Secure shopping with SSL data encryption</a>
              </span>
              <hr></hr>
              <span className="block text-sm text-gray-400 underline pt-8">
                {" "}
                <a href="w">Tell us about your checkout experience</a>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingBag;
