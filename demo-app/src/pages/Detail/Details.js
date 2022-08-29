import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../redux/actions/ProductsActions";
import "./Detail.css";
import ProductLists from "../../components/ProductLists";
import Header from "../../components/UI/Header/Header";

export default function Details() {
  let [infor, setInfor] = useState({
    img: "",
    idProduct: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  const { ProductDetail, ProductList } = useSelector(
    (state) => state.ProductsReducer
  );

  const idDetails = ProductList.find((item) => item.defaultArticle.code === id);
  // console.log(idDetails.images[0].url);
  infor = {
    // img: idDetails.images[0].url,

    img: idDetails.images[0].url,
    idProduct: id,
  };
  // console.log("infor", infor);

  const getDetail = () => {
    dispatch(getDetailProduct(infor));
    // console.log("getDetail");
  };
  // console.log("ProductDetali ", ProductDetail);

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
              <img src={ProductDetail.images} alt />
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
              <button className="btn-gradient">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      // <div>abc</div>
    );
  };
  return (
    <div>
      {renderDetail()}
      {/* <ProductLists /> */}
    </div>
  );
}
