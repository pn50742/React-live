import { Img_PATH} from "../Content"

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

export default RestourentCart;