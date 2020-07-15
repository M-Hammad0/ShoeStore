import React from "react";
import { Link, Outlet } from "react-router-dom";
import shoes from "../shoes";

function Products() {
  return (
      <div className="row product-container">
        {Object.entries(shoes).map(([slug, { name, img, price }]) => (
          <div className="col-lg-4 img-container" key={slug}>
            <Link to={`/products/${slug}`}>
              {/* <h3>{name}</h3> */}
              <img src={img} alt={name} className="img" />
            </Link>
            <p className="product-name">{name}<span className="price">${price}</span></p>
          </div>
        ))}
        <Outlet />
      </div>
  );
}

export default Products;
