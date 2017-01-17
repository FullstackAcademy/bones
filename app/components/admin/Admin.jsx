import React from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const style = {
  paper: {
    padding: '5vh',
    margin: '5vh'
  },
  tab: {
    'font-size': '20px'
  }
}

export default({ users, editUser, editAddress }) => {

  return(
    <div>
      <h1>Existing Customers</h1>
      <Tabs>
        <Tab label="Basic Info" style={style.tab}>
          <div>
            {
              users.map(user => {
                return (
                  <div key={user.id}>
                    <Paper style={style.paper}>
                      <form
                        onSubmit={evt => {
                          evt.preventDefault();
                          editUser(user.id, evt.target.firstName.value, evt.target.lastName.value, evt.target.email.value);
                        }
                      }
                      >
                      <h3>Customer:</h3>
                      <div>
                        <TextField name="firstName" defaultValue={user.firstName} /><br></br>
                        <TextField name="lastName" defaultValue={user.lastName}/><br></br>
                        <TextField name="email" type="email" defaultValue={user.email} /><br></br>
                      </div>
                      <RaisedButton type="submit" label="Edit" primary={true} style={style.button}/>
                    </form>
                  </Paper>
                </div>
                )
              })
            }
          </div>
        </Tab>
        <Tab label="Addresses"  style={style.tab}>
            {users.map(user => {
              return (
                <Paper key={user.id} style={style.paper}>
                  <div>
                    <h3>{user.fullName}</h3>
                    {user.addresses && user.addresses.map(address => {
                      return (
                        <div key={address.id}>
                          <form onSubmit={evt => {
                                evt.preventDefault();
                                editAddress(user.id, evt.target.street.value, evt.target.city.value, evt.target.state.value, evt.target.zipcode.value);
                              }
                            }>
                            <TextField name="street" defaultValue={address.street} />
                            <TextField name="city" defaultValue={address.city}/>
                            <TextField name="state" defaultValue={address.state} />
                            <TextField name="zipcode" defaultValue={address.zipcode} />
                            <br></br>
                            <RaisedButton type="submit" label="Edit" primary={true} style={style.button}/>
                          </form>
                        </div>
                      )
                    })}
                  </div>
                </Paper>
                )
              })
            }
        </Tab>
        <Tab label="Orders"  style={style.tab}>
            {users.map(user => {
              return (
                <Paper key={user.id} style={style.paper}>
                  <div>
                    <h3>{user.fullName}</h3>
                    {user.orders && user.orders.map(order => {
                      return (
                        <div key={order.id}>
                          <form>
                            <TextField name="id" defaultValue={order.id} />
                            <br></br>
                            <SelectField
                              floatingLabelText="Status"
                              value={order.status}
                            >
                              <MenuItem value={'in-cart'} primaryText="In-Cart" />
                              <MenuItem value={'processing'} primaryText="Processing" />
                              <MenuItem value={'completed'} primaryText="Completed" />
                              <MenuItem value={'cancelled'} primaryText="Cancelled" />
                            </SelectField>
                            <br></br>
                            <RaisedButton type="submit" label="Edit" primary={true} style={style.button}/>
                          </form>
                          <br></br>
                          <br></br>
                          <br></br>
                        </div>

                      )
                    })}
                  </div>
                </Paper>
                )
              })
            }
        </Tab>
      </Tabs>
    </div>
  )
}
