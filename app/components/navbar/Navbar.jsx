import React from 'react';
import { Link, IndexLink } from 'react-router';

const style = {
  marginRight: 5
};

const Navbar = ({ auth, logout }) => {

  const dropdownItem = (typeof auth === 'string') ?
    (<li><Link to="/login">Sign in</Link></li>) :
    (<button type="button" onClick={logout}>Log Out</button>);

  const user = (typeof auth === 'string') ?
    'Guest' :
    auth.firstName;


  return (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <IndexLink to="/" className="navbar-brand">Rockstarz</IndexLink>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-left">
            <li ><Link to={'/rocks/categories/companion'}>Companion</Link></li>
            <li><Link to={'/rocks/categories/utility'}>Utility</Link></li>
            <li><Link to={'/rocks/categories/decorative'}>Decorative</Link></li>
            <li> <Link to={'/rocks/categories/miscellaneous'}>Miscellaneous</Link></li>
          </ul>


          <ul className="nav navbar-nav navbar-right">
            <li>
              <p style={style} className="navbar-text pull-right">
                {`Hello ${user}`}
              </p>
            </li>
            <li>
              <form className="navbar-form" role="search">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search" /></button>
                    </div>
                </div>
              </form>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account<span className="caret" /></a>
              <ul className="dropdown-menu">
                {dropdownItem}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
