import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";

export default function LoadingProduct() {
  return (
    <div className="col-3 my-5  flex-column ">
      <Card sx={{ maxWidth: 300, height: 550 }}>
        <CardActionArea style={{ height: "80%" }}>
          <Skeleton
            style={{ margin: "10px" }}
            width={270}
            height={330}
            variant="rectangular"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {/* {item.name} */}
            </Typography>
            <Typography>
              <p className="card-text text text-success">
                {/* {item.whitePrice.formattedValue} */}
              </p>
            </Typography>
            <Typography>
              <Skeleton width="90%" />
            </Typography>
            <Typography>
              <Skeleton width="50%" />
            </Typography>
            <Typography>
              <Skeleton width="90%" />
            </Typography>
            <Typography>
              <Skeleton width="20%" />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
