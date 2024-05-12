import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";

import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="shopcategory">
      <div className="shopcategory-indexSort"></div>
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-seemore">
        <Link to="/" style={{ textDecoration: "none" }}>
          See More..
        </Link>
      </div>
      <img src={props.banner} className="shopcategory-banner" alt="" />
    </div>
  );
};

export default ShopCategory;
