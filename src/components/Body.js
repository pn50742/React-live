import { useState,useEffect } from "react"
import {restrourentList } from "../Content"
import RestourentCart from "./RestourentCart"
import SkeletonUI from './SkeletonUI'


function filterData(searchText, resDta){
   return resDta.filter((restrourent)=>restrourent.data.name.includes(searchText))
}
const Body=()=>{
    const [restourents, setRestourents] =useState([])
    const [searchInput, setSearchInput]=useState("KFC");
    useEffect(()=>{
        loadRestrourentData();
    },[]);
    async function loadRestrourentData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.481971166465947&lng=77.32097737491131&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("kjkj",json);
        setRestourents(json?.data?.cards[2]?.data?.data?.cards)
    }

    const searchInputHandler=(e)=>{
        setSearchInput(e.target.value)

    }
    const searchbtnHandler=()=>{
        const data = filterData(searchInput, restourents);
        setRestourents(data);
    }
    return <>
    <div className='main-body'>
        <div className="search__container">
            <input type="test" className="search-input" placeholder="search..." name="serachValue" value={searchInput} onChange={searchInputHandler}/>
            <button className="search-btn" onClick={searchbtnHandler}>Search</button>
        </div>
        <div className='restrourent__list'>
            {(restourents.length===0)?<SkeletonUI/>:
              restourents.map((restList)=>{
                return  <RestourentCart {...restList.data} kehy={restList.data.id}/>
              })
            }
        </div>
        </div>
    </>
}

export default Body;