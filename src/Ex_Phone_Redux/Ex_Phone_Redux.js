import React, { Component } from 'react'
import Cart from './Cart'
import DetailPhone from './DetailPhone'
import ListPhone from './ListPhone'

export default class Ex_Phone_Redux extends Component {
  render() {
    return (
      <div className='ml-2 mr-2'>
        <h2>Ex_Phone_Redux</h2>
        <div className="row">
            <div className="col-6">
                <ListPhone/>
            </div>
            <div className="col-6">
                <DetailPhone/>
            </div>
            <div className="col-10 m-auto">
                <Cart/>
            </div>
        </div>

      </div>
    )
  }
}
