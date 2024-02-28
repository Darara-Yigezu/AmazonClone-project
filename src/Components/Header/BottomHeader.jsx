import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css";

const BottomHeader = () => {
  return (
    <div className={classes.lower_container}>
    <ul>
        <li>
            <AiOutlineMenu />
            <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registery</li>
        <li>Gift Cards</li>
        <li>Sell</li>
    </ul>
</div>
  )
}
export default BottomHeader;