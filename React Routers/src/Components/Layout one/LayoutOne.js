import React from "react";
import { Link } from "react-router-dom";

function LayoutOne() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> ABOUT </Link>
          </li>
          <li>
            <Link to="/contract"> CONTRACT </Link>
          </li>

          <li>
            <Link to="/product/1/1"> PRODUCTDETAIL 1</Link>
          </li>
          <li>
            <Link to="/product/2/2"> PRODUCTDETAIL 2</Link>
          </li>
          <li>
            <Link to="/product/3/3"> PRODUCTDETAIL 3</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <p>this is footer 1</p>
      </footer>
    </>
  );
}

export default LayoutOne;
