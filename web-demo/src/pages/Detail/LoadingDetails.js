import React from "react";
import Skeleton from "@mui/material/Skeleton";
export default function LoadingDetails() {
  return (
    <section className="aboutUs section-inner container">
      <div className="container">
        <div className="aboutUs__content">
          <div
            className="aboutUs__left "
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <Skeleton variant="rectangular" width={"90%"} height={"70%"} />
          </div>
          <div
            className="aboutUs__right "
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="title">
              <h2>
                <Skeleton variant="h1" width={"30%"} />
              </h2>

              <p>
                {" "}
                <Skeleton width={"25%"} />
              </p>
            </div>
            <p>
              {" "}
              <Skeleton width={"40%"} />
            </p>
            <p>
              <Skeleton width={"20%"} />
              {/* <SquareIcon
                  style={{
                    color: ProductDetail.color.rgbColor,
                    border: "1px solid #00000f",
                  }}
                /> */}
            </p>
            <ul>
              <li>
                <Skeleton width={"20%"} />
                <br />
                <Skeleton width={"100%"} />
                <Skeleton width={"100%"} />
                <Skeleton width={"100%"} />
              </li>
            </ul>
            <Skeleton width={"20%"} height={80} />
          </div>
        </div>
      </div>
    </section>
  );
}
