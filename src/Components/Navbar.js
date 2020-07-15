import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

function Navbar({ cart }) {
  return (
    <div>
      <AppBar
        style={{
          backgroundColor: "black",
          boxShadow: "none",
          borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
        }}
        position="sticky"
      >
        <Toolbar>
          <img
            style={{ width: "4rem" }}
            src="https://image.flaticon.com/icons/svg/732/732084.svg"
            alt="niki-logo"
          />
          <div style={{marginLeft: "auto", display: "flex"}}>
          <Typography variant="h6">
            <Link style={{color: "#fff"}} to="/">Home</Link>
          </Typography>
          <Typography style={{ marginLeft: "10px" }} variant="h6">
            <Link style={{color: "#fff"}}  to="products">products</Link>
          </Typography>
          <Typography style={{ marginLeft: "10px" }} variant="h6">
            <Link style={{color: "#fff"}}  to="cart">
              <Badge badgeContent={cart.length}>
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
