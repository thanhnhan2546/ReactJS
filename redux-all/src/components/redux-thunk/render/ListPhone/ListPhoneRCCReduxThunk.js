import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiListPhone } from "../../Reducers/Actions/PhoneActions";

class ListPhoneRCCReduxThunk extends Component {
  getTaskList = () => {
    this.props.dispatch(getApiListPhone());
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

export default connect(mapStateToProps)(ListPhoneRCCReduxThunk);
