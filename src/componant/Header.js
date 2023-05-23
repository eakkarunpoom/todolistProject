import './Header.css';
import { MdDarkMode } from "react-icons/md"
import { MdLightMode } from "react-icons/md"

const Header = ({theme, setTheme}) => {
    const ToggleTheme = () => {
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return(
        <div className="header">
            <div className="logo">
                <span>Todo List</span>
            </div>
            <div className="theme">
                <span onClick={ToggleTheme}>{theme === "light" ? <MdLightMode/> : <MdDarkMode />} </span>
            </div>
        </div>
    )
}

export default Header;