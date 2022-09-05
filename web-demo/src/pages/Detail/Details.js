import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getDetailProduct } from "../../redux/actions/ProductsActions";
import "./Detail.css";
import ProductLists from "../../components/ProductLists";
import { getDetailProduct } from "../../redux/reducers/ProductsReducers";

import { CartReducers } from "../../redux/reducers/CartReducers";
import SquareIcon from "@mui/icons-material/Square";
import { Rating } from "@mui/material";
import LoadingDetails from "./LoadingDetails";
import Swper from "../../components/swipper/Swper";

export default function Details() {
  const [idproductm] = useState({
    img: "",
    idProduct: "",
  });
  const { id } = useParams();

  const dispatch = useDispatch();

  const ProductDetail = useSelector((state) => state.products.productDetail);
  const { statusDetails } = useSelector((state) => state.products);

  const ProductList = useSelector((state) => state.products.product.list);
  const idDetails = ProductList.find((item) => item.defaultArticle.code === id);
  const [img, setImg] = useState(idDetails.images[0].url);

  const getDetail = () => {
    dispatch(getDetailProduct(id));
    // console.log("getDetail");
  };

  const addpdCart = (pd) => {
    const pdCart = {
      id: pd.code,
      name: pd.name,
      img: img,
      price: pd.whitePrice.price,
    };
    dispatch(CartReducers.actions.addToCart(pdCart));
  };
  useEffect(() => {
    getDetail();
    window.scrollTo(0, 500);
  }, [id]);

  const handleMouseEnter = (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.opacity = 1;
    setImg(e.target.src);
  };
  const handleMouseLeave = (e) => {
    e.target.style.opacity = 0.2;
    setImg(idDetails.images[0].url);
  };
  const renderDetail = () => {
    return (
      <section className="aboutUs section-inner container">
        <div className="container">
          <div className="aboutUs__content">
            <div
              className="aboutUs__left wow animate__animated animate__fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <img src={img} alt />
              <Swper
                handleMouseLeave={handleMouseLeave}
                handleMouseEnter={handleMouseEnter}
              />
            </div>
            <div
              className="aboutUs__right wow animate__animated animate__fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="title">
                <h2>{ProductDetail.name}</h2>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
                <p>{ProductDetail.whitePrice.price} $</p>
              </div>
              <p>Type: {ProductDetail.presentationTypes}</p>
              <p>
                Color: <span>{ProductDetail.color.text}</span>&ensp;
                <SquareIcon
                  style={{
                    color: ProductDetail.color.rgbColor,
                    border: "1px solid #00000f",
                  }}
                />
              </p>
              <ul>
                <li>
                  Description:
                  <br />
                  {ProductDetail.description}
                </li>
              </ul>
              <button
                className="btn-gradient"
                onClick={() => {
                  addpdCart(ProductDetail);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <div>
        {statusDetails === "loading" ? <LoadingDetails /> : renderDetail()}
      </div>
      <ProductLists id={id} />
    </>
  );
}
