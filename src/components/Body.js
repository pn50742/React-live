import { restrourentList } from "../Config"
import { Img_PATH } from "../Content"

const RestourentCart =({name, cuisines, totalRatingsString, maxDeliveryTime, cloudinaryImageId})=>{
    return <>
    <div className='res__cart'>
        <img  src={
            Img_PATH + cloudinaryImageId
        }/>
        <h4>{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <div ><p className='rating'>{totalRatingsString}</p><p>{maxDeliveryTime} minutes</p></div>
    </div>
    </>
}

const Body=()=>{
    return <>
    <div className='main-body'>
        <div className='restrourent__list'>
            {
              restrourentList.map((restList)=>{
                return  <RestourentCart {...restList.data} key={restList.data.id}/>
              })  
            }
        </div>
        </div>
    </>
}

export default Body;