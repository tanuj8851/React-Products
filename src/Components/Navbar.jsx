import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id='Nav'>
            <div>
                <h1>Shopify</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/products"}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link to={"/register"}>
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar