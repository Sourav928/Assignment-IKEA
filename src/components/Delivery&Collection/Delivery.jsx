import React from "react";
import { BsTag } from "react-icons/bs";
import PriceSection from "../PriceSection";

import { AiOutlineRightCircle } from "react-icons/ai";
import Acknowledge from "../acknowledge/Acknowledge";
const Delivery = () => {
  return (
    <div>
      <div className=" flex justify-between px-2  w-4/5 min-h-24 mx-auto">
        <img
          className="m-2 px-4 "
          src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
          alt="logo"
        />
      </div>
      <div className="flex w-4/5 m-auto  ">
        <div className=" w-3/5">
          <h4 className="text-4xl font-bold m-4 mb-8">
            Delivery and collection
          </h4>

          <div className="m-4">
            <h3 className="text-sm text-gray-800 ">Deliver to</h3>
            <h4 className="text-sm text-black font-bold mb-8">
              Maharashtra 400001 Edit
            </h4>
          </div>

          <div>
            {/* <div className="bg-gray-300 flex justify-center items-center">
              <span>logo</span>
              <h3>
                Order online and collect from an IKEA store or a point near you
                nearby Maharashtra 400001
              </h3>
            </div> */}

            {/* <button className="flex justify-between">
              <div>
                <h2>Collect at pick-up point</h2>
                <p>Earliest collection 23.3.2024 11:00 AM - 5:00 PM</p>
                <button className="hidden">Select pick-up point</button>
              </div>
              <div>
                <h2>Rs.79.00</h2>
              </div>
            </button> */}
          </div>
        </div>

        <div className=" w-2/5 px-2">
          <div className="flex justify-between px-4 ">
            <h3 className="font-bold text-md">Your Order</h3>
            <div className="underline">
              <a href="a">Edit</a>
            </div>
          </div>
          <div className="flex justify-between items-center px-4">
            <img
              className="w-24 h-24"
              src="https://www.ikea.com/in/en/images/products/mammut-childrens-chair-in-outdoor-pink__0727923_pe735930_s3.jpg"
              alt="product"
            />
            <span>
              <AiOutlineRightCircle size={40} />
            </span>
          </div>

          <PriceSection />
          <hr></hr>
          <div>
            <div className="flex justify-start items-center px-1 my-4 font-bold">
              <span className="px-2  my-8">
                <BsTag />
              </span>{" "}
              Have a discount code?
            </div>
          </div>
          <Acknowledge />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
