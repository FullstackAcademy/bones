import React from 'react'
import { browserHistory } from 'react-router';

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span className="whoami-user-name">{user && user.name}</span>
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent logout" onClick={() => {
      browserHistory.push('/');
      logout();
    }}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {clearOrders} from 'APP/app/reducers/orders'
import {connect} from 'react-redux'


export default connect (
  ({ auth }) => ({ user: auth }),
  { logout }
) (WhoAmI)
