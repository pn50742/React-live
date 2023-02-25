import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonUI =()=>{
return <>
{Array(10).fill("").map((e,index)=> <div key={index} className='res__cart'>
 <Skeleton height={140} style={{marginBottom:"10px"}}/>
<Skeleton count={5}/>
 </div>)}

</>
}

export default SkeletonUI;