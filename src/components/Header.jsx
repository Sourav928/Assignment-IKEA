import React from "react";
import { GoCreditCard } from "react-icons/go";
import { BiMobileAlt } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { LiaStoreAltSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { IoFileTrayOutline } from "react-icons/io5";
import { PiHouseLight } from "react-icons/pi";

const Header = () => {
  return (
    <div>
      {/* header top */}
      <div className="bg-black ">
        <div className="w-4/5 h-10 text-sm mx-auto flex justify-between px-5  text-white bg-black">
          <span className="flex justify-center items-center ">
            <GoCreditCard /> <span className="pl-3">Buy IKEA gift card</span>
          </span>
          <span className="flex justify-center items-center px-2">
            <BiMobileAlt /> <span className="pl-3">Download the IKEA app</span>
          </span>
          <span className="flex justify-center items-center px-2">
            <BsTruck />{" "}
            <span className="pl-3">
              Now delivering across Andhra Pradesh, Karnataka, Maharashtra and
              Telangana
            </span>
          </span>
        </div>
      </div>

      {/* header navbar */}
      <div className=" flex justify-between px-10 w-4/5 min-h-24 mx-auto">
        <img
          className="m-2 px-4 "
          src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
          alt="logo"
        />
        <div className="flex items-center w-full ">
          <div className="m-2 w-full h-12 bg-gray-100 rounded-full flex items-center justify-between">
            <div className="flex justify-center">
              <AiOutlineSearch
                size={30}
                style={{ padding: "4px", margin: "5px" }}
              />
              <input
                className="w-full bg-gray-100"
                placeholder=" What are you looking for"
              />
            </div>
            <BiCamera size={30} style={{ padding: "4px", margin: "5px" }} />
          </div>
        </div>

        <div className="flex items-center text-sm">
          <div className="mx-2 px-2 flex items-center justify-between">
            <BsTruck size={20} />
            <p className=" px-2">40001</p>
          </div>
          <div className="mx-2 px-2 flex items-center justify-between">
            <LiaStoreAltSolid size={20} />
            <p className=" px-2">Store </p>
          </div>
          <div className="mx-2 px-2 flex items-center justify-between">
            <GoPeople size={20} />
            <p className=" px-2">Login </p>
          </div>
          <div className="mx-2 px-2 flex items-center justify-between">
            <AiOutlineHeart size={20} />
          </div>
          <div className="mx-2 px-2 flex items-center justify-between">
            <HiOutlineShoppingBag size={20} />
          </div>
        </div>
      </div>

      {/* header bottom */}
      <div className=" w-4/5 m-auto px-12 text-sm text-gray-400 font-bold ">
        <div className="flex justify-start items-center ">
          <div
            className="hover:text-gray-600 font-bold px-4 flex justify-center items-center
          "
          >
            <span>
              <IoFileTrayOutline style={{ fontWeight: "bold" }} />
            </span>{" "}
            <span className="pl-2"> Shop products</span>
          </div>
          <div className="hover:text-gray-600 px-4 flex justify-center items-center">
            <span>
              <PiHouseLight style={{ fontWeight: "bold" }} />
            </span>
            <span className="pl-2">Shop by rooms</span>
          </div>
          <div className="hover:text-gray-600 px-4">Offers</div>
          <div className="hover:text-gray-600 px-4">IKEA for Business</div>
          <div className="hover:text-gray-600 px-4">Customer Service</div>
          <div className="hover:text-gray-600 px-4">Tips, ideas & trends</div>
          <div className="hover:text-gray-600 px-4">More</div>
        </div>
      </div>
      <hr className="mx-auto w-4/5 m-2"></hr>
    </div>
  );
};

export default Header;
