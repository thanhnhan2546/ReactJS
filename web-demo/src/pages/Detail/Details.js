import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getDetailProduct } from "../../redux/actions/ProductsActions";
import "./Detail.css";
import ProductLists from "../../components/ProductLists";
import Header from "../../components/UI/Header/Header";
import { getDetailProduct } from "../../redux/reducers/ProductsReducers";
import CircularProgress from "@mui/material/CircularProgress";
import { CartReducers } from "../../redux/reducers/CartReducers";

export default function Details() {
  const [idproductm] = useState({
    img: "",
    idProduct: "",
  });
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  // console.log(id);

  // const { ProductDetail, ProductList } = useSelector(
  //   (state) => state.ProductsReducer
  // );
  const ProductDetail = useSelector((state) => state.products.productDetail);
  const { statusDetails } = useSelector((state) => state.products);
  console.log(statusDetails);
  const ProductList = useSelector((state) => state.products.product.list);
  const idDetails = ProductList.find((item) => item.defaultArticle.code === id);
  const img = idDetails.images[0].url;
  // console.log(idDetails);
  // setInfor( {
  //   img: idDetails.images[0].url,
  //   idProduct: id,
  // });
  // console.log("infor", infor);

  const getDetail = () => {
    dispatch(getDetailProduct(id));
    // console.log("getDetail");
  };
  console.log("ProductDetali ", ProductDetail);

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
  }, []);

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
            </div>
            <div
              className="aboutUs__right wow animate__animated animate__fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="title">
                <h2>{ProductDetail.name}</h2>
                <p>{ProductDetail.whitePrice.price} $</p>
              </div>
              <p>Type: {ProductDetail.presentationTypes}</p>
              <p>
                Color:{" "}
                <span style={{ color: ProductDetail.color.rgbColor }}>
                  {ProductDetail.color.text}
                </span>
              </p>
              <ul>
                <li>
                  Import By:
                  {ProductDetail.importedBy}
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
        {statusDetails === "loading" ? (
          <div style={{ textAlign: "center", margin: "15px" }}>
            <CircularProgress color="success" />
          </div>
        ) : (
          renderDetail()
        )}
      </div>
      {/* <ProductLists /> */}
    </>
  );
}
