import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemPhone from './ItemPhone'

class ListPhone extends Component {
    renderListPhone = () => {
        return this.props.listPhone.map((item, index) => {
            return (
                <ItemPhone item ={item} key={index}/>
            )
        })
    }

  render() {
    return (
        <div className='row'>
            {this.renderListPhone()}
        </div>
    )
  }
}

let mapStateToProps = (state) => {
    return {
        listPhone: state.phoneReducer.listPhone
    }
}

export default connect(mapStateToProps)(ListPhone);
