import "./Header.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Badge, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  totalCart = 0;
  state = {
    bgColor: "#343a4000!important",
  };
  listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      this.setState({ bgColor: "#343a40" });
    }
    if (window.scrollY < 200) {
      this.setState({ bgColor: "#343a4000" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
    this.logout();
  }
  componentDidUpdate() {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      this.totalCart = cart.total;
    } else {
      this.totalCart = 0;
    }
  }

  logout = () => {
    localStorage.removeItem("user");
  };
  render() {
    return (
      <header className="container">
        <nav
          style={{ backgroundColor: this.state.bgColor }}
          className="navbar navbar-expand-md  navbar-dark"
        >
          {/* Brand */}
          <NavLink className="navbar-brand" to="/">
            {/* fa-2x: size 2x trong bootstrap */}
            <i className="fa-solid fa-dice-d20 fa-2x" />
            <span>PARMA</span>
          </NavLink>
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            {/* ml-auto: margin-left: auto : căn lề từ bên phải*/}
            <ul className="menu navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              {localStorage.getItem("user") ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Hello {localStorage.getItem("user")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" onClick={this.logout}>
                      Log out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logins">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">
                      <IconButton aria-label="cart">
                        <StyledBadge
                          badgeContent={this.totalCart}
                          color="secondary"
                        >
                          <ShoppingCartIcon />
                        </StyledBadge>
                      </IconButton>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
