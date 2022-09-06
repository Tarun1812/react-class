import React from 'react'
import { Link } from 'react-router-dom'
import './listing.css';

const listingDisplay = (props) => {
    // console.log('>>listingDisplay', props)

    const renderList = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item) => {
                    return(
                        <div className="item" key={item._id}>
                            <img src={item.restaurant_thumb} alt={item.restaurant_name} />  
                            <div className='itemText'>
                                <Link><h4>{item.restaurant_name}</h4></Link>
                                <p>Rs. {item.cost}</p>
                                <p>{item.address}</p>
                                <p>{item.rating_text}</p>
                       
                            </div>

                        </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data As Per Filter</h2>
                    </div>
                )
            }

        }else{
            return(
                <div>
                    <h2>Loading...</h2>
                    <img src="/images/loader.gif" alt="loader"/>
                </div>
            )
        }
    }



  return (
    <>
    {renderList(props)}
    </>
  )
}

export default listingDisplay




// <div className="row">
//                                 <div className="image-thumb" >
//                                     <img src={item.restaurant_thumb} className="Image"
//                                     alt={item.restaurant_name}/>
//                                 </div>
//                                 <div className="col-md-7">
//                                     <div className="hotel_name">
//                                         <Link to={`/details?restId=${item.restaurant_id}`}>
//                                             {item.restaurant_name}
//                                         </Link>
//                                     </div>
//                                     <div className="city_name">{item.address}</div>
//                                     <div className="city_name">{item.rating_text}</div>
//                                     <div className="city_name">Rs. {item.cost}</div>
//                                     <div className="labelDiv">
//                                         <span className="label label-primary">
//                                             {item.mealTypes[0].mealtype_name}
//                                         </span> &nbsp;
//                                         <span className="label label-success">
//                                             {item.mealTypes[1].mealtype_name}
//                                         </span>
//                                     </div>
//                                     <div className="labelDiv">
//                                         <span className="label label-warning">
//                                             {item.cuisines[0].cuisine_name}
//                                         </span> &nbsp;
//                                         <span className="label label-info">
//                                             {item.cuisines[1].cuisine_name}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>