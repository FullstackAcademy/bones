import React, {Component} from 'react'
import store from '../store';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {orange500, blue500, gray500} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
const addStyle = {
  width:5
};
const styles = {
  chip: {
    margin: 4,
  },
};
const Divstyle ={
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
}
const showCheckboxes = false;
const products = [{id:1, name:"Hillary's Pantsuit",quantity:1, description:"LALA",price:12,photoURL:"http://placehold.it/250x150",categories:['Clothing'] },
                  {id:2, name:"Elijah Woods's Frodo Ring",quantity:1, description:"HAHA",price:300,photoURL:"http://placehold.it/250x150",categories:['Clothing'] }]

export class Cart extends Component {

  constructor() {
    super()
    this.state = store.getState();

    this.del = this.del.bind(this);
    this.sub = this.sub.bind(this);
    this.upquantity = this.upquantity.bind(this);

  }
  componentWillMount () {
      store.subscribe(() => this.setState(store.getState()));
  }


  del( product){
    console.log("del", product.product.id);
    var id = product.product.id;
    var url = `/api/products/${id}`;
    // axios.del(url)
    // .then(function(res){
    //   console.log("ressss",res)
    //   var tmp = store.getState();
    //   console.log("TMP", tmp);
    // })

  }
  sub( ){
    console.log("submit form", products);

    //var id = product.product.id;
    //var url = `/api/products/${id}`;
    // axios.del(url)
    // .then(function(res){
    //   console.log("ressss",res)
        // })

  }
  upquantity(q, product){
    console.log("Quantity: ", q);
    console.log("product", product);
    //dispatch and update quantity for single product
  }

  render() {
    console.log("PROPS!!", this.props);
    console.log("state", store.getState());

  return (
    <div style={Divstyle}>
    <h1>My Cart</h1>
      <Table selectable={showCheckboxes} >
        <TableHeader  displaySelectAll={showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Quantity</TableHeaderColumn>
            <TableHeaderColumn>Categories</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={showCheckboxes}  >
             { this.props.cart.products && this.props.cart.products.map(product => (
                <TableRow key={product.id}>
                  <TableRowColumn><img src={product.photoURL}/></TableRowColumn>
                  <TableRowColumn>{product.name}</TableRowColumn>
                  <TableRowColumn>{product.description}</TableRowColumn>
                  <TableRowColumn>
                      <TextField  defaultValue = {product.quantity} name="quantitytext" onChange={evt=>{console.log("qq", evt.target.value); this.upquantity(evt.target.value, {product});}}/>
                  </TableRowColumn>
                  <TableRowColumn>
                    {
                      product.categories && product.categories.map((category,idx) => (
                         <Chip key = {idx} style={styles.chip}>{category}</Chip>
                      ))
                    }
                  </TableRowColumn>
                  <TableRowColumn>{product.price}</TableRowColumn>
                  <TableRowColumn><RaisedButton type="submit" label="DELETE" primary={true} onClick={evt=>{ evt.preventDefault(); this.del({product});}}/></TableRowColumn>
                </TableRow>
              ))
            }


            <TableRow>
            </TableRow>
        </TableBody>
      </Table>

      <RaisedButton type="submit" label="SUBMIT" onClick = {evt=>{ evt.preventDefault(); this.sub();}}/>
    </div>



)}

}

import {connect} from 'react-redux'
const mapStateToProps = ({auth, user, cart}) => ({
  auth, products, cart
})
export default connect (
  mapStateToProps,
  null,
) (Cart)

