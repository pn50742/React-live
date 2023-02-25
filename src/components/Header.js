import { useState } from "react";
import Logo from "./Logo";
const Header=()=>{
    const [isLoggedin, setIsLoggedin] = useState(false);
    const loggedInUser =()=>{
        setIsLoggedin(true)
    }
    return (
        <div className='header'>
            <div className='logo__container'>
            <Logo/>
            </div>
    <div className='nav'>
    <ul>
        <li><a>home</a></li>
        <li><a>about</a></li>
        <li><a>contact</a></li>
        <li><a>cart</a></li>
            </ul>
    </div>
    <div>{isLoggedin? 
        <button onClick={()=>setIsLoggedin(false)}>Log Out</button>:    
        <button  onClick={()=>setIsLoggedin(true)}>Log In</button>
}
    </div>
        </div>
    );
    }

    export default Header;