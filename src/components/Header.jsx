import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Header() {
  const cartItem = useSelector(state=>state.cart);
  return (
    <div className="header-bg">
      <div className="container p-2">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="header-left">
              <div className="row justify-content-between">
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                  <h1>BDSHOP</h1>
                </div>
                <div className="col-lg-7 d-flex justify-content-center align-items-center">
                  <input
                    className="search_input"
                    type="text"
                    placeholder="search your product"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end gap-3 align-items-center">
            <div className="cart-icon fs-3 position-relative">
              <Link to="/cart">
                <FaCartPlus />
              </Link>
              <h1 className="cart_count">{cartItem.length}</h1>
            </div>
            <div className="line"></div>
            <div className="signin">
              <Link className="link" to="/signin">
                SignIn
              </Link>
            </div>
            <div className="login">
              <Link className="link" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
