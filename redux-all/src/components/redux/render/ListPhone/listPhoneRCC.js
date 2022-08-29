import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { GET_API_PHONE } from "../../Reducers/Constants/PhoneConstants";
import { getApiListPhone } from "../../Reducers/Actions/PhoneActions";

// Cách 1: Truyền thẳng mapDispatchToProps qua cho Reducer không qua action
// class listPhoneRCC extends Component {
//   getTaskList = () => {
//     const pormise = axios({
//       method: "GET",
//       url: "http://localhost:3001/Phone",
//     }).then((res) => {
//       this.props.updateListPhone(res.data);
//     });
//   };
//   componentDidMount() {
//     this.getTaskList();
//   }
//   render() {
//     console.log(this.props.phone);
//     return <div>listPhoneRCC</div>;
//   }
// }
// function mapStateToProps(state) {
//   return { phone: state.PhoneReducerRedux.listPhone };
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateListPhone: (phones) => {
//       const action = {
//         type: GET_API_PHONE,
//         phones,
//       };
//       dispatch(action);
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(listPhoneRCC);

// Cách 2: truyền thông qua action
class listPhoneRCC extends Component {
  getTaskList = () => {
    const pormise = axios({
      method: "GET",
      url: "http://localhost:3001/Phone",
    }).then((res) => {
      const action = getApiListPhone(res.data);
      this.props.dispatch(action);
    });
  };
  componentDidMount() {
    this.getTaskList();
  }
  render() {
    console.log(this.props.phone);
    return <div>listPhoneRCC</div>;
  }
}
function mapStateToProps(state) {
  return { phone: state.PhoneReducerRedux.listPhone };
}

export default connect(mapStateToProps)(listPhoneRCC);
