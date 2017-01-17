'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import Jokes from './components/Jokes';
// import WhoAmI from './components/WhoAmI';

import UserInfoContainer from './components/users/UserInfoContainer';
import LoginContainer from './components/login/LoginContainer';
import AllRocksContainer from './components/rocks/AllRocksContainer';
import RockContainer from './components/rock/RockContainer';
import CartContainer from './components/cart/CartContainer';
import AdminContainer from './components/admin/AdminContainer';

import App from './components/App.jsx';

import { fetchUserInfo } from './reducers/userInfoReducer';
import { fetchAllRocks, fetchAllCategoryRocks } from './reducers/rocks';
import { fetchARock} from './reducers/rock';
import { fetchCart } from './reducers/cart';
import { fetchUsers } from './reducers/admin';

injectTapEventPlugin();

// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// )(
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI /> : <LoginContainer />}
//       </nav>
//       {children}
//     </div>
// );

const appEnter = () => {
  store.dispatch(fetchAllRocks());
};

const adminEnter = () => {
  store.dispatch(fetchUsers());
};

const rockEnter = (nextRouterState) => {
  const rockId = nextRouterState.params.id;
  store.dispatch(fetchARock(rockId));
};

const userSignedIn = (nextRouterState) => {
  const userId = nextRouterState.params.id;
  store.dispatch(fetchUserInfo(userId));
};

const cartEnter = (nextRouterState) => {
  const userId = nextRouterState.params.userId;
  store.dispatch(fetchCart(userId));
};

const categoryRocksEnter = (nextRouterState) => {
  const categoryName = nextRouterState.params.categoryName;
  store.dispatch(fetchAllCategoryRocks(categoryName));
};

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRedirect to='/rocks' />
          <Route path='/rocks' component={AllRocksContainer} onEnter={appEnter} />
          <Route path='/admin' component={AdminContainer} onEnter={adminEnter} />
          <Route path="/jokes" component={Jokes} />
          <Route path="/rocks/:id" component={RockContainer} onEnter={rockEnter} />
          <Route path='/rocks/categories/:categoryName' component={AllRocksContainer} onEnter={categoryRocksEnter} />
          <Route path="/users/:id" component={UserInfoContainer} onEnter={userSignedIn} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/cart/:userId" component={CartContainer} onEnter={cartEnter} />

        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
