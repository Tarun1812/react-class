import React, { Component } from 'react';
import QuickDisplay from './QuickDisplay';
import './QuickSearch.css';


const url = "https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component {
    constructor (){
        super()

        this.state={
            mealType:'',
        }
    }

    render(){
        return(
            <div className='quicksearch'>
                <center>
                    <div id='quickheading'>
                        Quick Search by Meal Type
                    </div>
                </center>
                <QuickDisplay mealData={this.state.mealType} />
            </div>
        )
    }
    componentDidMount (){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}
export default QuickSearch;