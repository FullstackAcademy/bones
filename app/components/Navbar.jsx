import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
// import {logoutThunkCreator} from '../redux/currentUser'

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    // this.renderLoginSignup = this.renderLoginSignup.bind(this);
    // this.renderLogout = this.renderLogout.bind(this);

  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><img src="/images/logo.png" /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/users" activeClassName="active">users</Link>
              </li>
              <li>
                <Link to="/stories" activeClassName="active">stories</Link>
              </li>
            </ul>
            {/* { this.renderLogout() }
            { this.renderLoginSignup() } */}
          </div>
        </div>
      </nav>
    );
  }

  // renderLoginSignup() {
  //   return (
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //        <Link to="/signup" activeClassName="active">signup</Link>
  //       </li>
  //       <li>
  //         <Link to="/login" activeClassName="active">login</Link>
  //       </li>
  //     </ul>
  //   );
  // }
  //
  // renderLogout() {
  //   return (
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //       <button
  //         className="navbar-btn btn btn-default"
  //         onClick={this.props.logout}>
  //         logout
  //       </button>
  //       </li>
  //     </ul>
  //   );
  // }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;
// const mapDispatch = (dispatch, ownProps) => (
//     {logout: function(){
//         dispatch(logoutThunkCreator())
// } })

export default connect(mapProps, mapDispatch)(Navbar);
