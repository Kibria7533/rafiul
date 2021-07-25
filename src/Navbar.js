import React from 'react';
import {

    NavLink
} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <NavLink exact activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/" >Home</NavLink>

            <NavLink exact activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/omor">Omor</NavLink>
        </div>
    );
};

export default Navbar;