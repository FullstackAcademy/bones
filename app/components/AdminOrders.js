
export class AdminOrders extends Component {

  render() {
    return (
      <div id="orders-container" style={{margin: 5, padding: 5}}>
        <Tabs
          value={this.state.value}
          onChange={e => this.handleChange(e)}>
          <Tab label="All Orders" value="all orders" >
            <div>
              <OrdersPanel filteredOrders={orders} />
            </div>
          </Tab>
          <Tab label="Not Submitted" value="not submitted" >
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'not submitted')} />
            </div>
          </Tab>
          <Tab label="Processing" value="processing">
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'processing')} />
            </div>
          </Tab>
          <Tab label="Shipped" value="shipped">
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'shipped')} />
            </div>
          </Tab>
          <Tab label="Delivered" value="delivered">
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'delivered')} />
            </div>
          </Tab>
          <Tab label="Cancelled" value="cancelled">
            <div>
              <OrdersPanel filteredOrders={
                orders.filter(order => order.status === 'cancelled')} />
            </div>
          </Tab>
        </Tabs>
      </div>
  )}
}

const mapStateToProps = ({auth}) => ({
  auth
})

export default connect (
  mapStateToProps,
  null
) (Admin)