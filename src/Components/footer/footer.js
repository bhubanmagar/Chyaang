import React from "react";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.jpg";
import twiter from "../../assets/tww.png";
import payment from "../../assets/payment.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer-section h-72 box-border bg-zinc-100 flex justify-between max-sm:block">
        <div className="about-us h-64 w-80 p-2   bg-zinc-100 rounded-md">
          <div className="font-bold  p-2">
            <span>ABOUT US</span>
          </div>
          <hr />
          <hr />
          <div className="info m-2 p-3">
            <p>
              Rakshi Bhandar is a Nepali store from where you can buy Raksi
              online in Nepal. We have all kinds of Whiskey, Rum, Beer, Wine,
              Vodka, Brandy, and Gin. We do have products of both national and
              international brands.
            </p>
            <hr />
          </div>
        </div>
        {/* we serve */}
        <div className="we-serve h-64 w-80 p-2 rounded-md">
          <div className="font-bold  p-2">
            <span>WE SERVE </span>
          </div>
          <hr />
          <div className="pl-9 font-serif p-1 ">
            <span>inside Ringroad</span>
          </div>
          <hr />
          <div className="info m-2 p-1">
            <p className="pl-5">Outside Valley</p>
            <br />
            <br />
            <strong>Delevery Time: </strong>
            <span>Within a hour</span>
          </div>
        </div>
        {/* dind us on */}
        <div className="find-us h-64 w-80 p-2  bg-zinc-100 rounded-md">
          <div className="font-bold p-2">
            <span>FIND US ON</span>
          </div>
          <hr />
          <div className="info flex m-2 p-3 gap-3">
            <img className="h-11 rounded-3xl" src={facebook} alt="facebook" />
            <img className="h-11 rounded-3xl" src={insta} alt="insta" />
            <img className="h-11 rounded-3xl" src={twiter} alt="twiter" />
          </div>
        </div>
        {/* we acce[t] */}
        <div className="about-us h-64 w-80 p-2 bg-zinc-100 rounded-md">
          <div className="font-bold p-2">
            <span>WE ACCEPT</span>
          </div>
          <hr />
          <div className="info m-2 p-3 h-52">
            <img src={payment} alt="payment" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
