import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonUI =()=>{
return <>
 <div className='res__cart'>
 <Skeleton height={140} style={{marginBottom:"10px"}}/>
<Skeleton count={5}/>
 </div>
 <div className='res__cart'>
 <Skeleton height={140} style={{marginBottom:"10px"}}/>
<Skeleton count={5}/>
 </div>
 <div className='res__cart'>
 <Skeleton height={140} style={{marginBottom:"10px"}}/>
<Skeleton count={5}/>
 </div>
 <div className='res__cart'>
 <Skeleton height={140} style={{marginBottom:"10px"}}/>
<Skeleton count={5}/>
 </div>
 <div className='res__cart'>
 <Skeleton height={140} style={{marginBottom:"10px"}}/>
<Skeleton count={5}/>
 </div>
</>
}

export default SkeletonUI;