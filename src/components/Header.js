import Logo from "./Logo";
const Header=()=>{
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
        </div>
    );
    }

    export default Header;