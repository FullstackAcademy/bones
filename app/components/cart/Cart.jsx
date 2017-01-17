import React from 'react';
import { Link } from 'react-router';


export default({ cartProducts, cartAddProduct, cartRemoveProduct }) => {
  console.log('cartProducts', cartProducts);
  return(
    <div>
    {
      cartProducts.map(cartProduct => {
        return (
          <ul key = {cartProduct.id}>
            <li><Link to={`/rocks/${cartProduct.rock.id}`}>{ cartProduct.rock && cartProduct.rock.name}</Link></li>
            <li>${ cartProduct.rock && cartProduct.rock.price}</li>

            <li> {cartProduct.quantity} </li>
            <button onClick={() => cartRemoveProduct(cartProduct.order.user_id, cartProduct.rock_id)}> Remove Rock </button>
          </ul>
        )
      })
    }
    </div>
  )
}