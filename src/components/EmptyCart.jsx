import React from "react";

const EmptyCart = () => {
  return (
    <div>
      <div className="  flex w-4/5 mx-auto p-4">
        <div className=" w-1/2 mx-auto">
          <h1 className="text-4xl font-bold p-4">Your Shopping bag is empty</h1>
          <p className="text-md text-gray-400  p-4">
            When you add products to your shopping bag, they will appear here.
          </p>
          <button className="w-2/3 mx-auto text-white bg-black rounded-full text-sm font-bold h-12 mt-2">
            Login or Signup
          </button>
        </div>
        <div className=" w-1/2 mx-auto">
          <img
            className="w-156 h-156"
            src="https://www.ikea.com/in/en/shoppingcart/static/media/blue-bag.95128e4e9685a182a22a.png"
            alt="bag"
          />
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
