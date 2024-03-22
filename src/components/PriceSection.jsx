import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PriceSection = () => {
  const products = useSelector((state) => state.cart.items);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    let totalP = 0;
    let totalW = 0;
    products.forEach((product) => {
      totalP += product.price * product.quantity;
      totalW += product.weightPerKg * product.quantity;
    });
    setTotalPrice(totalP);
    setTotalWeight(totalW);
  }, [products]);

  return (
    <div className="w-full mx-auto p-4 m-2">
      <h4 className="p-2 text-md font-bold">Order Summary</h4>
      <div className="p-2 text-gray-400 text-sm ">
        {products.length === 0 ? (
          <>
            <div></div>
          </>
        ) : (
          <>
            <div className="flex justify-between py-2">
              <p>Products</p>
              <p className="text-black font-bold">Price</p>
            </div>
            {products.map((product) => (
              <div className="flex justify-between py-2">
                <p>{product.title}</p>
                <p className="text-black font-bold">Rs. {product.price}</p>
              </div>
            ))}
          </>
        )}

        <div className="flex justify-between">
          <p className="pt-2">Delivery charges</p>
          <p className="text-black font-bold">-</p>
        </div>
        <p className="mb-2">calculated at the next step</p>
      </div>
      <hr className=" border-solid border border-black rounded"></hr>
      <div>
        <div className="flex justify-between py-2">
          <h6 className="text-sm font-bold">Subtotal</h6>
          <h2 className="text-2xl font-bold">Rs {totalPrice}.00</h2>
        </div>
      </div>
      <div className="flex justify-between pb-4">
        <p className="text-sm text-gray-400">Total weight</p>
        <p className="text-sm text-gray-400">{totalWeight} kg</p>
      </div>
    </div>
  );
};

export default PriceSection;
