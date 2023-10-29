import { Link } from "react-router-dom";
import Logo from "./Logo";
import {HiUser} from 'react-icons/hi2';
import { useState } from "react";
import FullScreenModal from "./fullScreenModal";


const Navbar = ({user=true}) => {
    
    const [modal, setModal] = useState(false)
    
    return (
        <div className="grid grid-cols-3 px-8 py-5 text-white bg-[#18203A]">
            <Logo/>

            <div className="">

            </div>

            <div className="flex justify-end">
                {user ?  
                    <div className="flex gap-x-4 items-center">
                        <button
                            className="py-2 px-4 rounded-[2px] hover:bg-opacity-50 bg-orange-500 font-bold whitespace-nowrap"
                            onClick={()=>{setModal(true)}}
                        >
                            withdraw
                        </button>

                        <HiUser size={30}/>
                    </div>
                    
                    :<div className="flex gap-x-4">
                        <Link
                            className="py-2 px-4 rounded-[2px] hover:bg-opacity-50 bg-orange-500 font-bold whitespace-nowrap"
                            to={`/login`}
                        >
                            sign in
                        </Link>

                        <Link
                            className="py-2 px-4 rounded-[2px] hover:bg-opacity-50 border border-orange-500 text-orange-500 whitespace-nowrap font-bold"
                            to={`/signup`}
                        >
                            sign up
                        </Link>
                    </div>
                }
            </div>
            {modal && <FullScreenModal/>}
        </div>
     );
}
 
export default Navbar;