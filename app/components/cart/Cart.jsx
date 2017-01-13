import React from 'react';
import { Link } from 'react-router';

export default({ cartProducts }) => {
  console.log('what is cartProducts', cartProducts);

  return(
    <div>
    {
      cartProducts.map(cartProduct => {
        return (
          <ul key = {cartProduct.id}>
            <li><Link to={`/rocks/${cartProduct.rock.id}`}>{ cartProduct.rock && cartProduct.rock.name}</Link></li>
            <li>$ { cartProduct.rock && cartProduct.rock.price}</li>

            <li> {cartProduct.quantity} </li>
          </ul>
        )
      })
    }
    </div>
  )
}