import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import {NavDropdown, MenuItem} from 'react-bootstrap';

const CategoriesMenu = ({ categories }) => (
	<NavDropdown title='Categories' id='categories'>
		{
			categories.map(category => (
				<LinkContainer to={`/categories/${category.id}`} key={category.id}>
					<MenuItem>{category.name}</MenuItem>
				</LinkContainer>
			))
		}
	</NavDropdown>
);

import {connect} from 'react-redux';

export default connect (
  ({ categories }) => ({ categories }),
  {},
) (CategoriesMenu);