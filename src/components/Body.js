import { useState,useEffect } from "react"
import {restrourentList } from "../Content"
import RestourentCart from "./RestourentCart"
import SkeletonUI from './SkeletonUI'


function filterData(searchText, resDta){
   return resDta.filter((restrourent)=>restrourent?.data?.name.toLowerCase().includes(searchText.toLowerCase()))
}
const Body=()=>{
    const [allRestorents, setAllRestorents] =useState([])
    const [fillteredRestorents, setFillteredRestorents] =useState([])
    const [searchInput, setSearchInput]=useState("KFC");
    useEffect(()=>{
        loadRestrourentData();
    },[]);
    async function loadRestrourentData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.481971166465947&lng=77.32097737491131&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("kjkj",json);
        setAllRestorents(json?.data?.cards[2]?.data?.data?.cards)
        setFillteredRestorents(json?.data?.cards[2]?.data?.data?.cards)
    }

    const searchInputHandler=(e)=>{
        setSearchInput(e.target.value)

    }
    const searchbtnHandler=()=>{
        const data = filterData(searchInput, allRestorents);
        setFillteredRestorents(data);
    }
    console.log("allRestorents", allRestorents)
    return <>
    <div className='main-body'>
        <div className="search__container">
            <input type="test" className="search-input" placeholder="search..." name="serachValue" value={searchInput} onChange={searchInputHandler}/>
            <button className="search-btn" onClick={searchbtnHandler}>Search</button>
        </div>
        <div className='restrourent__list'>
            {(allRestorents.length===0)?<SkeletonUI/>:
            (fillteredRestorents.length===0)?<h1>no restrourent found</h1>:
              fillteredRestorents.map((restList)=>{
                return  <RestourentCart {...restList.data} kehy={restList.data.id}/>
              })
            }
        </div>
        </div>
    </>
}

export default Body;