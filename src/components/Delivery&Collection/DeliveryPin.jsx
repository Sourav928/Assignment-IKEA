import React from "react";
import { BsTag } from "react-icons/bs";

import PriceSection from "../PriceSection";
import { AiOutlineRightCircle } from "react-icons/ai";
import Acknowledge from "../acknowledge/Acknowledge";
import { Link } from "react-router-dom";

const DeliveryPin = () => {
  return (
    <div>
      <div className=" flex justify-between px-2  w-4/5 min-h-24 mx-auto">
        <img
          className="m-2 px-4 "
          src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
          alt="logo"
        />
      </div>
      <div className=" flex w-4/5 m-auto  ">
        <div className=" w-3/5">
          <h1 className="text-4xl font-bold m-4 mb-8">
            Delivery and collection
          </h1>

          <div className="m-4">
            <h3 className="text-sm text-gray-800  mb-4">
              Enter your pincode to see delivery options available in your area.
            </h3>
            <h3 className="text-sm text-gray-800   mb-4">
              Enter a pincode to see product availability and delivery options.
            </h3>
            <div className="mb-8 mt-4">
              <input className="w-full h-10  border-solid border border-gray-400 rounded-sm focus:border-blue-800 outline-none px-4 " />
              <span className="text-xs text-gray-400">eg:500001</span>
            </div>
            <Link to={"/pickup"}>
              <button className="bg-black text-sm font-bold  text-white w-full rounded-full p-2 mb-8">
                View delivery options
              </button>
            </Link>
            <hr></hr>
            <h3 className="text-md font-bold text-gray-500 my-4 py-4">
              Your details
            </h3>
            <hr></hr>
            <h3 className="text-md font-bold text-gray-500 my-4 py-4">
              Payment
            </h3>
            <hr></hr>
          </div>
        </div>
        <div className=" w-2/5 px-2">
          <div className="flex justify-between px-4 ">
            <h3 className="font-bold text-md">Your Order</h3>
            <div className="underline">
              <a href="e">Edit</a>
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

          <div className="px-2 my-8">
            <input type="checkbox" id="businessCustomer" class="hidden" />
            <label
              for="businessCustomer"
              class="inline-flex items-center cursor-pointer"
            >
              <span class="w-4 h-4 border border-gray-400 rounded-sm mr-2"></span>
              <span class="text-sm font-medium text-gray-700">
                I'm a Business customer
              </span>
            </label>
          </div>

          <div className="bg-gray-100 p-4">
            <h4 className="text-md font-bold text-blue-500 ">IKEA Family</h4>
            <ul className="text-sm text-gray-600 list-disc px-4 mb-4">
              <li>Get instant benefits</li>
              <li>Keep track of your orders</li>
              <li>Save time during checkout</li>
            </ul>
            <div className="flex flex-col w-full mx-auto mb-4">
              <button className="text-sm font-bold text-black border-solid border border-black rounded-full p-2 mb-4">
                Join for free
              </button>
              <button className="text-sm font-bold text-white bg-black border-solid border border-black rounded-full p-2">
                Log in
              </button>
            </div>

            <h5 className="font-bold text-sm my-1 ">
              Add your IKEA Family number manually
            </h5>
          </div>
          <Acknowledge />
        </div>
      </div>
    </div>
  );
};

export default DeliveryPin;
