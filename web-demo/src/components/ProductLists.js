import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getProducts } from "../redux/reducers/ProductsReducers";
import CircularProgress from "@mui/material/CircularProgress";
import { CartReducers } from "../redux/reducers/CartReducers";
import LoadingProduct from "./LoadingProduct";
export default function ProductLists(props) {
  const ProductList = useSelector((state) => state.products.product);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getProductAPI = () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    getProductAPI();
  }, []);

  const addpdCart = (pd) => {
    const pdCart = {
      id: pd.defaultArticle.code,
      name: pd.name,
      img: pd.images[0].url,
      price: pd.whitePrice.value,
    };
    dispatch(CartReducers.actions.addToCart(pdCart));
  };
  const renderProducts = () => {
    return ProductList.list
      .filter((item) => item.defaultArticle.code !== props.id)
      .map((item, index) => {
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
        {ProductList.status === "loading" ? (
          <>
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
          </>
        ) : (
          renderProducts()
        )}
      </div>
    </div>
  );
}
