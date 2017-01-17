import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import {
  IconMenu,
  MenuItem,
  TextField,
  IconButton
} from 'material-ui';

const stars = (reviewRating) => {
  const result = [];
  for (let i = 0; i < reviewRating; i++) {
    result.push(<i key={i} className="tiny material-icons">star</i>);
  }
  return result;
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridlist: {
    height: '100vh',
    width: '100vw',
    margin: 'auto',
    overflowY: 'auto'
  },
  paper: {
    height: '45vh',
    textAlign: 'left',
    margin: 18
  },
  iconStyles: {
    textAlign: 'right',
    marginRight: 24,
  }
};

const SingleRock = ({
  rock,
  updateQuantity,
  addProductToCart,
  auth: { id },
  itemQuantity: { quantity, errorText }
}) => {
  const { reviews } = rock;

  return (
    <div style={styles.root}>
      <GridList
        cols={4}
        cellHeight="auto"
        style={styles.gridlist}
      >
        <GridTile cols={2}>
          <img src={ rock.photo } />
        </GridTile>
        <GridTile cols={2}>
          <h1>{rock.name}</h1>
          <h2>{`Price: $${rock.price / 100}`}</h2>
          <h2>{`Category: ${rock.category && rock.category.name}`}</h2>
          <h2>{`Color: ${rock.color}`}</h2>
          <p>{rock.description}</p>
          {/* <p>Tags: {''}
          {rock.tags && rock.tags.map(tag => '' + tag.name).join(', ')}</p> */}
        </GridTile>
        <GridTile cols={2}>
          <br />
          <br />
          {reviews && reviews.map((review) => (
            <div key={review.id}>
              <div>
                { stars(review.rating) }
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </GridTile>
        <GridTile cols={1}>
          <IconMenu
            iconButtonElement={
              <IconButton
                key={rock.id + 'a'}
                tooltip="Click to choose quantity"
                tooltipPosition="bottom-right"
              >
                <i
                  className="material-icons"
                  style={styles.iconStyles}
                  onClick={() => updateQuantity(0)}
                >
                  add_shopping_cart
                </i>
              </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          >
            <MenuItem>
              <TextField
                type="number"
                name="itemQuantity"
                errorText={errorText}
                floatingLabelText="Quantity"
                onTouchTap={evt => {
                  evt.preventDefault();
                  evt.stopPropagation();
                }}
                onChange={evt => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  updateQuantity(Number(evt.target.value));
                }}
                hintText="How many would you like to order?"
              />
            </MenuItem>
            <MenuItem
              primaryText="Add To Cart"
              onTouchTap={evt => {
                evt.preventDefault();
                addProductToCart(quantity, id, rock.id);
              }}
            />
          </IconMenu>
        </GridTile>
      </GridList>
    </div>
  );
};

export default SingleRock;
