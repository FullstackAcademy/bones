import React from 'react';

export default ({ rock }) => {
  const { reviews } = rock;
  console.log('here is rock reviews', reviews )
  return (
    <div>
      <p>{rock.name}</p>
      <img src = { rock.photo } />
      <p>Category: {rock.category && rock.category.name}</p>
      <p>Price: {rock.price}</p>
      <p>Color: {rock.color}</p>
      <p>Description: {rock.description}</p>
      <p>Tags:</p>
      <div>{rock.tags && rock.tags.map((tag) => {
          return (
            <div key={tag.id}>
              <p>{tag.name}</p>
            </div>
          )
        })}
      </div>
      <p>Reviews:</p>
      <div>{rock.reviews && rock.reviews.map((review) => {
          return (
            <div key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>Review: {review.comment}</p>
            </div>
          )
        })}
      </div>



    </div>
  )
}
