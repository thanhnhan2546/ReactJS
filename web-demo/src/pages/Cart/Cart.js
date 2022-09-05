import {
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { Component, useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { CartReducers } from "../../redux/reducers/CartReducers";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Title = styled(Typography)({
  color: "#343a40",
  fontSize: "36px",
  fontWeight: "600",
  textAlign: "center",
  margin: "15px",
});
const Head = styled(TableCell)({
  fontSize: "18px",
  fontWeight: "600",
  color: "white",
});
const Body = styled(TableCell)({
  fontSize: "16px",
  fontWeight: "300",
});
const Total = styled(TableCell)({
  fontSize: "18px",
  fontWeight: "600",
  color: "#ee4d2d",
});
// export default class Cart extends Component {
//   state = {
//     cartList: [],
//     total: 0,
//   };

//   componentDidMount() {
//     if (localStorage.getItem("cart")) {
//       const cart = JSON.parse(localStorage.getItem("cart"));
//       this.setState(
//         {
//           cartList: [...cart.cartList],
//           total: cart.total,
//         },
//         console.log(this.state.cartList)
//       );
//     }
//   }

//   renderTotal() {
//     return this.state.cartList.reduce((res, item) => {
//       return (res += Number(item.price) * Number(item.qtyCart));
//     }, 0);
//   }

//   renderBodyTable() {
//     console.log(this.state.cartList);
//     return this.state.cartList.map((item, index) => {
//       return (
//         <TableRow key={index}>
//           <Body>
//             <IconButton
//               aria-label="delete"
//               color="error"
//               onClick={() => {
//                 this.deleteCart(item.id);
//               }}
//             >
//               <DeleteIcon style={{ fontSize: "28px" }} />
//             </IconButton>
//           </Body>
//           <Body>
//             <img src={item.img} width="40%" height="30%" alt="" />
//           </Body>
//           <Body>{item.name}</Body>
//           <Body align="right">{item.qtyCart}</Body>
//           <Body align="right">{item.price} $</Body>
//           <Body align="right">
//             {Number(item.qtyCart) * Number(item.price)} $
//           </Body>
//         </TableRow>
//       );
//     });
//   }

//   deleteCart(id) {
//     const index = this.state.cartList.findIndex((item) => item.id === id);
//     console.log(index);

//     this.setState(
//       {
//         ...this.state,
//         cartList: this.state.cartList.splice(index, 1),
//       },
//       console.log(this.state)
//     );
//   }

//   render() {
//     return (
//       <Container style={{ textAlign: "right" }}>
//         <Title>Cart</Title>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead className="bg-success ">
//               <TableRow className="text-light">
//                 <Head></Head>
//                 <Head color="#fffff">Image</Head>
//                 <Head>Name</Head>
//                 <Head align="right">Quantity</Head>
//                 <Head align="right">Price</Head>
//                 <Head align="right">Subtotal</Head>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {this.renderBodyTable()}

//               <TableRow>
//                 <Body rowSpan={2} colSpan={4} />
//                 <Total align="right">Item</Total>
//                 <Body align="right">{this.state.total}</Body>
//               </TableRow>
//               <TableRow>
//                 <Total align="right">Total</Total>
//                 <Body align="right">{this.renderTotal()} $</Body>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <Button
//           style={{ marginTop: "15px" }}
//           size="large"
//           variant="contained"
//           color="success"
//         >
//           Order
//         </Button>
//       </Container>
//     );
//   }
// }

export default function () {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  let boolean = true;

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const Storagecart = JSON.parse(localStorage.getItem("cart"));

      const cartDispatch = {
        cartList: Storagecart.cartList,
        total: Storagecart.total,
      };
      dispatch(CartReducers.actions.getCartLocal(cartDispatch));
    } else {
      boolean = false;
    }
  }, []);
  const renderTotal = () => {
    return cart.cartList
      .reduce((res, item) => {
        return (res += Number(item.price) * Number(item.qtyCart));
      }, 0)
      .toFixed(2);
  };

  const deleteCart = (id) => {
    dispatch(CartReducers.actions.deleteCart(id));
  };
  const changeQty = (id, bool) => {
    const infor = {
      id,
      bool,
    };
    dispatch(CartReducers.actions.changeQtyCart(infor));
  };
  const renderBodyTable = () => {
    return cart.cartList.map((item, index) => {
      return (
        <TableRow key={index}>
          <Body>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => {
                deleteCart(item.id);
              }}
            >
              <DeleteIcon style={{ fontSize: "28px" }} />
            </IconButton>
          </Body>
          <Body>
            <img src={item.img} width="40%" height="30%" alt="" />
          </Body>
          <Body>{item.name}</Body>
          <Body align="center">
            <Button
              onClick={() => {
                changeQty(item.id, false);
              }}
            >
              <ArrowLeftIcon />
            </Button>
            <input
              style={{ width: "40px", textAlign: "center" }}
              type="text"
              value={item.qtyCart}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                changeQty(item.id, true);
              }}
            >
              <ArrowRightIcon />
            </Button>
          </Body>
          <Body align="right">{item.price} $</Body>
          <Body align="right">
            {(Number(item.qtyCart) * Number(item.price)).toFixed(2)} $
          </Body>
        </TableRow>
      );
    });
  };
  return (
    <Container style={{ textAlign: "right" }}>
      <Title>Cart</Title>
      <div style={{ overflow: "auto" }}>
        <TableContainer
          component={Paper}
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <Table>
            <TableHead className="bg-success ">
              <TableRow className="text-light">
                <Head></Head>
                <Head color="#fffff">Image</Head>
                <Head>Name</Head>
                <Head align="center">Quantity</Head>
                <Head align="right">Price</Head>
                <Head align="right">Subtotal</Head>
              </TableRow>
            </TableHead>
            <TableBody
            // style={{
            //   overflowY: "scroll",
            //   height: "100px",
            //   display: "block",
            // }}
            >
              {boolean ? (
                renderBodyTable()
              ) : (
                <TableRow>
                  <Body rowSpan={3} style={{ textAlign: "center" }}>
                    No Item
                  </Body>
                </TableRow>
              )}

              <TableRow>
                <Body rowSpan={2} colSpan={4} />
                <Total align="right">Item</Total>
                <Body align="right">{cart.total}</Body>
              </TableRow>
              <TableRow>
                <Total align="right">Total</Total>
                <Body align="right">{boolean ? renderTotal() : ""} $</Body>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Button
        style={{ marginTop: "15px" }}
        size="large"
        variant="contained"
        color="success"
      >
        Order
      </Button>
    </Container>
  );
}
