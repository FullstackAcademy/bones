import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

const Cart = (props) => {
  // let currentOrder=props.currentOrder;



  //DUMMY CURRENTORDER (DELETE LATER)
  //this is not an actual row of orders... rather it's the array of product on orders linked to the order in the table that is incomplete
  // (or the array of products that is the value of the session.currentOrder)


//Is this seed info? Why would an array of orders been the currentOrder(which is singular?)
  let currentOrder=[
    {price: null, qty: 1, product_id: 3, order_id: null, associatedProduct: {id: 3, title: 'Jeremy Lin Signed basketball', description: 'Signed by the best 3 week flash in the pan wonder in basketball history', price: 1000000, inventory: 2, imageUrl: 'http://assets.nydailynews.com/polopoly_fs/1.1019747.1330898515!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/10682257.jpg'} },//session order will have a null order_id
    {price: null, qty: 2, product_id: 1, order_id: null, associatedProduct: {id: 1, title: 'Lebrrn', description: 'jersey for cavs bandwagon fans', price: 1, inventory: 100, imageUrl: 'https://cavs-staging-cavaiersholdings.netdna-ssl.com/content/images/thumbs/0020957_23-lebron-james-2nd-alt-swingman-jersey_415.jpeg'} }//lebron jersey
  ]

  // props.currentOrder=[
  //   {price: null, qty: 1, product_id: 3, order_id: 2},// example of product on order where the user is LOGGED IN (in which case he/she has an order row that is incomplete, which this order_id points to)
  //   {price: null, qty: 2, product_id: 1, order_id: 2},
  // ]

  console.log('at cart');
  return (
    <div>
      <h3>Cart</h3>
      <div className="list-group">
      {
        currentOrder && currentOrder.map(singleOrder => (
          //The col-xs-4 should be handled by the parent. Limits versatility
            <div className="col-xs-4" key={ singleOrder.associatedProduct.id } >
              <Link className="thumbnail" to={`/products/${singleOrder.associatedProduct.id}`} >
                <div className="resizeLrg">
                  <img src={ singleOrder.associatedProduct.imageUrl } />
                </div>
                <div className="caption">
                  <h5>
                    <span>{ singleOrder.associatedProduct.title }</span>
                  </h5>
                </div>
              </Link>
            </div>
        ))
      }
      </div>
    </div>
  );
}

const mapState = ({ currentOrder }) => ({ currentOrder });// store.getState().categories !!  ... that is passed into categories

const mapDispatch = {};
//null works for mapDispatch
export default connect(mapState, mapDispatch)(Cart);
