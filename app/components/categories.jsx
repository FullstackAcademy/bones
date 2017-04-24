import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

const Categories = (props) => {

  const categories = props.categories;

  return (
    <div>
      <h3>Categories</h3>
      <div className="row">
      {
        categories && categories.map(category => (
          <div className="col-xs-4" key={ category.id } >
            <Link className="thumbnail" to={`/categories/${category.id}`} >
              <div className="resizeLrg">
                <img src={ category.imageUrl } />
              </div>
              <div className="caption">
                <h5>
                  <span>{ category.name }</span>
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

const mapState = ({ categories }) => ({ categories });// store.getState().categories !!  ... that is passed into categories

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Categories);
