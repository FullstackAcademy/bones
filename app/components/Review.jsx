import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

export default class Review extends React.Component {
  constructor(){
    super()
    this.state = {
      starRating: 0,
      text: ""
    }
    this.updateStar = this.updateStar.bind(this)
    this.updateText = this.updateText.bind(this)
    this.addReview = this.addReview.bind(this)
  }

  updateStar(e) {
    let newStarRating = +(e.target.value);
    this.setState({starRating: newStarRating})
  }

  updateText(e) {
    let newTextReview = e.target.value;
    this.setState({text: newTextReview});
  }

  addReview(state) {
    axios.post('/api/reviews', state)
    .then(res => console.log(res))
    .catch(err => console.error(err.stack))
  }

  render() {
    return(
       <div className="review-form">
         <form>
         <input className="star star-1" id="star-1" type="radio" name="star1" value="1" onChange={(e) => this.updateStar(e)}/>
         <label className="star star-1" htmlFor="star-1"></label>
         <input className="star star-2" id="star-2" type="radio" name="star2" value="2" onChange={(e) => this.updateStar(e)}/>
         <label className="star star-2" htmlFor="star-2"></label>
         <input className="star star-3" id="star-3" type="radio" name="star3" value="3" onChange={(e) => this.updateStar(e)}/>
         <label className="star star-3" htmlFor="star-3"></label>
         <input className="star star-4" id="star-4" type="radio" name="star4" value="4" onChange={(e) => this.updateStar(e)}/>
         <label className="star star-4" htmlFor="star-4"></label>
         <input className="star star-5" id="star-5" type="radio" name="star5" value="5" onChange={(e) => this.updateStar(e)}/>
         <label className="star star-5" htmlFor="star-5"></label> <br />
         <label>Your Review:</label><br />
         <br />
         <textarea rows="20" cols="100" onChange={(e) => this.updateText(e)}></textarea><br />
         <button type="submit" onClick={(e)=>{
          e.preventDefault()
          this.addReview(this.state)
          }}
        >Submit
         </button>
         </form>
       </div>
    )
  }
}
