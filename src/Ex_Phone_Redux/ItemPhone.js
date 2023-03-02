import React, { Component } from "react";
import { connect } from "react-redux";

class ItemPhone extends Component {
  render() {
    let {maSP, tenSP,giaBan, hinhAnh} = this.props.item
    return (
      <div className="col-4">
        <div className="card border-warning h-100">
          <img className="card-img-top" src={hinhAnh} alt='' />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">{giaBan}</p>
            <button onClick={() => {this.props.handleAddToCart(this.props.item)}} className="btn btn-success">Add to cart</button>
            <button onClick={() => {this.props.handleChangeItemPhone(maSP)}} className="btn btn-primary mt-2">View detail</button>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleChangeItemPhone: (id) => {
            dispatch({
                type: 'CHANGE_ITEM_PHONE',
                payload: id
            })
        },
        handleAddToCart: (phone) => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: phone
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemPhone);
