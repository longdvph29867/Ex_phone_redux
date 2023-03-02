import React, { Component } from "react";
import { connect } from "react-redux";

class DetailPhone extends Component {

  render() {
    let {maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh} = this.props.phone;
    return (
      <div className="row align-items-center">
        <div className="col-4">
          <div className="card">
            <img className="card-img-top" src={hinhAnh} alt=''/>
            <div className="card-body">
              <h4 className="card-title">{tenSP}</h4>
            </div>
          </div>
        </div>
        <div className="col-8">
          <table className="table text-left">
            <thead>
              <tr>
                <th colSpan={2}>Thông tin chi tiết</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Mã SP</th>
                    <td>{maSP}</td>
                </tr>
                <tr>
                    <th>Màn Hình</th>
                    <td>{manHinh}</td>
                </tr>
                <tr>
                    <th>Hệ điều hành</th>
                    <td>{heDieuHanh}</td>
                </tr>
                <tr>
                    <th>Camera trước</th>
                    <td>{cameraTruoc}</td>
                </tr>
                <tr>
                    <th>Camera sau</th>
                    <td>{cameraSau}</td>
                </tr>
                <tr>
                    <th>Ram</th>
                    <td>{ram}</td>
                </tr>
                <tr>
                    <th>Rom</th>
                    <td>{rom}</td>
                </tr>
                <tr>
                    <th>Giá bán</th>
                    <td>{giaBan}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        phone: state.phoneReducer.detail
    }
}
export default connect(mapStateToProps)(DetailPhone);
