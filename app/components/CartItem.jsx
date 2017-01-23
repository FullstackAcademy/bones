import React, {Component} from 'react';

class CartItem extends Component {
	constructor (props) {
		super(props);
		this.state = {
			quantity: 1
		}
		this.handleQuantityChange = this.handleQuantityChange.bind(this);
	}

	componentWillReceiveProps (props) {
		this.setState({ 
				quantity: props.item.quantity 
			});  
	}

	handleQuantityChange (evt) {
		const quantity = Number(evt.target.value);
		this.setState({
		  quantity
		});
	}

	render () {
		const item = this.props.item;
		const updateQuantity = this.props.updateQuantity;
		const removeItem = this.props.removeItem;
		return (
			<tr>
			  <td className="col-md-2">
			  	<div>{item.name}</div>
			  	<div>
			  		<img src={item.photoUrl} className="cart-item-photo"/>
			  	</div>
			  </td>
			  <td className="col-md-2">
			  	<input type="numeric" defaultValue={item.quantity} onChange={this.handleQuantityChange}/>
			  	<button 
			  		className='btn btn-success cart-item-update-btn'
			  		onClick={() => updateQuantity(item.id, this.state.quantity)}>
			  		Update
			  	</button>
			  	<button 
			  		className='btn btn-danger cart-item-remove-btn'
			  		onClick={() => removeItem(item.id)}>
			  		Remove
			  	</button>
			  </td>
			  <td className="col-md-2">{`$${item.price}`}</td>
			 	<td className="col-md-2">{`$${item.quantity * item.price}`}</td>
			</tr>
		);
	}
}

import {connect} from 'react-redux';
import {updateQuantity, removeItem} from '../reducers/cart';

const mapDispatchToProps = (dispatch) => {
	return {
		updateQuantity: (id, quantity) => {
			if (quantity === 0) dispatch(removeItem(id));
			else dispatch(updateQuantity(id, quantity));
		},
		removeItem: (id) => {
			dispatch(removeItem(id));
		}
	}
}

export default connect (
  () => ({}),
  mapDispatchToProps
) (CartItem);