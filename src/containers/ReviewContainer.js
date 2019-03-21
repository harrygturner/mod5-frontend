import React, { Component } from 'react';
import ReviewList from './ReviewList'
import ReviewHeader from '../components/ReviewHeader';
import ReviewForm from './forms/ReviewForm'

export default class ReviewContainer extends Component {

   state = {
      reviews: [],
      reviewListRendering: true,
   }

   componentDidMount() {
      fetch(`http://localhost:3000/attraction_reviews/${this.props.attractionId}`)
         .then(resp => resp.json())
         .then( reviews => {
            this.setState({
               reviews
            })
         })
   }

   handleReviewviewClick = event => {
      this.setState({ 
         reviewListRendering: event.target.className === 'form' ? false : true
      })
   }

   render() {
      return(
         <div id='review'>
            <ReviewHeader handleReviewViewClick={this.handleReviewviewClick}/>
            { this.state.reviews[0] && this.state.reviewListRendering 
               ? <ReviewList reviews={this.state.reviews} /> 
               : <ReviewForm /> } 
         </div>
      )
   }
} 