// import React, { useContext } from "react";
// import {Link} from "react-router-dom";
import classes from './header.module.css';
import LowerHeader from './LowerHeader';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
// import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
//  const[{basket},dispatch]=useContext(DataContext)
  return (
    <>
     {/* <section className={classes.fixed}></section> */}
        <header className={classes.header_container}>
          {/* Logo container */}
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo" />
            </a>

            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search container */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={25} />
          </div>

          {/* Other section */}
          <section className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            <a href="/">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>

            <a href="/Orders">
              <p>Returns</p>
              <span>& Orders</span>
            </a>

            <a href="/Cart" className={classes.cart}>
              <BiCart size={55} />
              {/* <span>{basket.length}</span> */}
            </a>
          </section>
        </header>  
        <LowerHeader/>
    </>
  );
};
export default Header;




