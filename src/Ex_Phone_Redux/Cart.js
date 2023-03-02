import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    renderTbody = () => {
        return this.props.listCart.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.maSP}</td>
                    <td>{item.tenSP}</td>
                    <td><img style={{width: 130,}} src={item.hinhAnh} alt="" /></td>
                    <td>{item.giaBan*item.quantity}</td>
                    <td>
                        <button onClick={() => {this.props.handleChangeQuantity(item.maSP, -1)}} className='btn btn-dark'>-</button>
                        <strong className='pl-2 pr-2'>
                            {item.quantity}
                        </strong>
                        <button onClick={() => {this.props.handleChangeQuantity(item.maSP, 1)}} className='btn btn-success'>+</button>
                    </td>
                    <td><button onClick={() => {this.props.handleDelete(item.maSP)}} className='btn btn-danger'>Delete</button></td>
                </tr>
            )
        })
    }

  render() {
    return (
      <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Tên SP</th>
                    <th>Hình ảnh</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderTbody()}
            </tbody>
        </table>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
    return {
        listCart: state.phoneReducer.cart
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleChangeQuantity: (id, luaChon) => {
            dispatch({
                type: 'CHANGE_QUANTITY',
                payload: {
                    id: id,
                    luaChon: luaChon
                }
            })
        },
        handleDelete: (id) => {
            dispatch({
                type: 'DELETE',
                payload: id
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
