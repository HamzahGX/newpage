import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="row">
        <img src="/img/hairband(model).avif" alt="" />
        <button>
          <Link to="/products/1" className="link">
            Sale
          </Link>
        </button>
      </div>

      <div className="col">
        <div className="row">
          <img src="/img/eten bracelet (model).avif" alt="" />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>

        <div className="row">
          <img src="/img/bluewatch(model).avif" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Watches
            </Link>
          </button>
        </div>
      </div>

      

      <div className="col">
        <div className="row">
          <img src="/img/display.jpeg" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Jewelry
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/hair-clipset-mod.avif" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
