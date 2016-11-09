import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {browserHistory} from 'react-router';

export default class Review extends React.Component {
  constructor(){
    super()
    this.state = {
      stars: 0,
      text: ""
    }
    this.updateStar = this.updateStar.bind(this)
    this.updateText = this.updateText.bind(this)
    this.addReview = this.addReview.bind(this)
  }

  updateStar(newStarRating) {
    this.setState({stars: newStarRating})
  }

  updateText(e) {
    let newTextReview = e.target.value;
    this.setState({text: newTextReview});
  }

  addReview(state) {
    axios.post('/api/reviews', state)
    .then((res)=>{
      if (res.status === 201) browserHistory.push('/')
    })
    .catch(err => console.error(err.stack))
  }

  render() {
    return(
       <div className="review-form">
         <form onSubmit={(e)=>{
          e.preventDefault()
          this.addReview(this.state)
          }}>
         <IconButton tooltip="☹️" touch={true} tooltipPosition="bottom-center" name="one-star" onClick={(e) => {
          e.preventDefault();
          this.updateStar(1)
        }}>
               <ActionGrade />
         </IconButton>

         <IconButton tooltip="😕" touch={true} tooltipPosition="bottom-center" name="two-star" onClick={(e) => {
          e.preventDefault()
          this.updateStar(2)
        }}>
               <ActionGrade />
         </IconButton>
         <IconButton tooltip="🤔" touch={true} tooltipPosition="bottom-center" name="three-star" onClick={(e) =>{
            e.preventDefault()
            this.updateStar(3)
         }}>
               <ActionGrade />
         </IconButton>
         <IconButton tooltip="😊" touch={true} tooltipPosition="bottom-center" name="four-star" onClick={(e) => {
           e.preventDefault()
            this.updateStar(4)
          }}>
               <ActionGrade />
         </IconButton>
         <IconButton tooltip="😍" touch={true} tooltipPosition="bottom-center" name="five-star"  onClick={(e) => {
            e.preventDefault();
            this.updateStar(5);
        }}>
               <ActionGrade />
         </IconButton><br />
         <label>Your Review:</label><br />
         <br />
         <textarea onChange={(e) => this.updateText(e)}></textarea><br />
         <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
         Submit
         </button>
         </form>
       </div>
    )
  }
}
