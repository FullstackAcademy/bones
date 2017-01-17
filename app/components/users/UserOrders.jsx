import React from 'react';

let count = 0;
const displayAllOrders = (ordersArray) => ordersArray.map(order => (
  <div key={order.created_at}>
    <h5>{`Order Number: ${++count}`}</h5>
    <p>
      {`Status: ${order.status}`}
    </p>
    <br />
    {order.cartProducts.map(product => (
      <div key={product.created_at}>
        <p>
          {`Product Name: ${product.rock.name}`}
        </p>
        <p>
          {`Product Description: ${product.rock.description}`}
        </p>
        <br />
      </div>
    ))}
    <br />
  </div>
));

const UserOrders = ({ orders }) => {
  return (
    <div>
      <h4>Orders:</h4>
      {displayAllOrders(orders)}
    </div>
  );
};

export default UserOrders;
