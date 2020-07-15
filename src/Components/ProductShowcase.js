import React from "react";
import shoes from "../shoes";
import { useParams } from "react-router-dom";
import { Breadcrumbs, Link, Typography} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

function ProductShowcase(props) {
  const { slug } = useParams();
  const shoe = shoes[slug];
  const { name, img, price } = shoe;
  return (
    <div className="row showcase-container">
      <div className="col-lg-8 showcase-img-container">
        <img className="showcase-img" src={img} alt={name} />
      </div>
      <div className="col-lg-4 info-container">
        <Breadcrumbs style={{marginTop: "5%"}} aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/products">
            Products
          </Link>
          <Typography color="inherit">{name.toLowerCase()}</Typography>
        </Breadcrumbs>
        <h4 style={{margin: "7% 0 11% 0"}}>
          {name}
          <span style={{ float: "right", fontSize: "1.5rem" }}>${price}</span>
        </h4>
        <p>
          A futuristic spin on OG Nike running and Tinker Hatfield's most iconic
          designs, the Nike Adapt Auto Max features Nike FitAdapt technology for
          a modern look and revolutionary feel. Set and save your favorite fits,
          customize your lights and download updates that let you adapt your
          look to whatever lies ahead.
        </p>
        <ToggleButtonGroup aria-label="text formatting">
          <ToggleButton style={{marginLeft: "10px", borderLeft: "1px solid rgba(0, 0, 0, 0.12)"}}>41</ToggleButton>
          <ToggleButton style={{marginLeft: "10px", borderLeft: "1px solid rgba(0, 0, 0, 0.12)"}}>42</ToggleButton>
          <ToggleButton style={{marginLeft: "10px", borderLeft: "1px solid rgba(0, 0, 0, 0.12)"}}>43</ToggleButton>
          <ToggleButton style={{marginLeft: "10px", borderLeft: "1px solid rgba(0, 0, 0, 0.12)"}}>44</ToggleButton>
        </ToggleButtonGroup>
        <button
          onClick={() => props.buy(name, price, img)}
          type="button"
          className="btn btn-dark btn-lg btn-block addtocart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductShowcase;
