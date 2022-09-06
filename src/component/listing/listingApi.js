import React, { Component } from 'react'
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import './listing.css';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

export class listingApi extends Component {
    constructor (props) {
        super(props)

        this.state= {
            restaurantList:''
        }
    }
   
  
    render() {
    return (
      <>
         <div className='mainlisting'>
          <div className='filter'>
            <center> 
              <h2>Filter</h2>  <hr/>
              <div>
                <h3>Cost Filter</h3>
              </div>
            </center>
          </div>
          <div className='content'>
            <ListingDisplay listData={this.state.restaurantList}/>
          </div>

         </div>
      </>
    )
  }


//   componentDidMount () {
//     fetch(url,{method:'GET'})
//     .then((res) => res.json())
//     .then((data) => {
//         this.setState({mealType:data})
//     })
//   }

  componentDidMount() {
    let mealId = this.props.match.params.mealId;

    axios.get(`${url}${mealId}`)
    .then((res) => {this.setState({restaurantList:res.data})} )
  }
}

export default listingApi