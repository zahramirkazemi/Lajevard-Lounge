import { useState } from "react";

const Hamburger = () => {
    const [isOpen,setIsOpen] = useState(false);
    const hamburgerclasses = `lg:hidden flex flex-col content-center items-center justify-evenly w-6 h-6 ${isOpen? 'first:opacity-0':'first:opacity-100'}`
    return ( 
        <div className={hamburgerclasses} onClick={()=> setIsOpen(state => !state)}>
            <span className="bg-black h-1 w-full rounded transition-all"></span>
            <span className="bg-black h-1 w-full rounded transition-all"></span>
            <span className="bg-black h-1 w-full rounded transition-all"></span>
        </div>
    );
}
 
export default Hamburger;