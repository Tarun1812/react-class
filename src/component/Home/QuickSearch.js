import React, { Component } from 'react';
import './QuickSearch.css'

class QuickSearch extends Component {

    render(){
        return(
            <div className='quicksearch'>
                <center>
                    <div id='quickheading'>
                        Quick Search by Meal Type
                    </div>
                </center>
                <div className='tilecontainer'>
                    <div className='tilecomponent1'>
                        <img src='#' alt='meal type' />
                    </div>
                    <div className='tilecomponent2'>
                        <h3>Lunch</h3>
                        <p>Have a nice Meal</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuickSearch;