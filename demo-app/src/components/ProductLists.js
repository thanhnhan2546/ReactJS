import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAPI } from "../redux/actions/ProductsActions";
import { NavLink, Link } from "react-router-dom";
import { addToCart } from "../redux/actions/CartActions";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack } from "@mui/system";

export default function ProductLists() {
  const { ProductList } = useSelector((state) => state.ProductsReducer);
  const { CartList } = useSelector((state) => state.CartReducers);
  const dispatch = useDispatch();

  const getProducts = () => {
    dispatch(getProductsAPI());
  };
  console.log("CartList", CartList);
  useEffect(() => {
    getProducts();
  }, []);

  const addpdCart = (pd) => {
    dispatch(addToCart(pd));
  };
  const renderProducts = () => {
    return ProductList.map((item, index) => {
      //   console.log(item.images[0].url);
      return (
        <>
          <div className="col-3 my-5  flex-column " key={index}>
            <Card sx={{ maxWidth: 300, height: 550 }}>
              <NavLink
                to={`/detail/${item.defaultArticle.code}`}
                style={{ textDecoration: "none" }}
              >
                <CardActionArea style={{ height: "80%" }}>
                  <CardMedia
                    component="img"
                    height="100"
                    width="100%"
                    image={item.images[0].url}
                    alt=""
                    sx={{ objectFit: "fill", width: 1, height: "75%" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <Typography>
                      <p className="card-text text text-success">
                        {item.whitePrice.formattedValue}
                      </p>
                    </Typography>
                    <Typography>
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </NavLink>
              <CardActions style={{ marginTop: "12%" }}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => {
                    addpdCart(item);
                  }}
                >
                  {/* <i class="fa-solid fa-cart-shopping"></i> */}
                  <ShoppingCartIcon />
                </Button>
              </CardActions>
            </Card>
            {/* <div className="card  " style={{ height: "350px", border: "none" }}>
            <img
              className="card-img-top"
              style={{ height: "70%", width: "80%", margin: "auto" }}
              src={item.images[0].url}
              alt="abc"
            />
            <div className="card-body">
              <NavLink to={`/detail/${item.defaultArticle.code}`}>
                <h4 className="card-title" style={{ fontSize: "18px" }}>
                  {item.name}
                </h4>
              </NavLink>

              <p className="card-text text text-success">
                {item.whitePrice.formattedValue}
              </p>
              <button
                className="btn btn-warning"
                onClick={() => {
                  addpdCart(item);
                }}
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div> */}
          </div>
        </>
      );
    });
  };

  return (
    <div className="container">
      <div className="row" style={{ justifyContent: "left" }}>
        {renderProducts()}
      </div>
    </div>
  );
}
