import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Header = () => {
    return (  
        <nav className="p-3 flex justify-between content-center items-center">
            <Link to="/" className="inline-block font-Logo text-lg font-bold" >Lajevard</Link>
            <div className="inline-block">
                <Hamburger/>
            </div>
        </nav>
    );
}
 
export default Header;