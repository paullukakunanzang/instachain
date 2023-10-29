import { Link } from "react-router-dom";
import Logo from "./Logo";
import {HiEnvelope, HiLockClosed} from 'react-icons/hi2';
import {FaXTwitter, FaDiscord} from 'react-icons/fa6'
import { useState } from "react";

const FormContainer = ({page="signup"}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    return ( 
        <div className="flex text-white flex-col md:w-4/12 w-full m-auto rounded-lg bg-[#18203A] bg-opacity-90 md:p-5 p-3">
            <form className="flex flex-col md:gap-y-6 gap-y-4" action="">
                <div className="flex justify-center">
                    <Logo text={false}/>
                </div>
                <h4 className="text-[20px] text-center text-orange-500 font-bold">{page}</h4>
                <span className="font-light text-xs">
                    Hi 👋, its easy getting started lets help you experience the magic 
                </span>
                <div className="flex flex-col gap-y-4 md:gap-y-4">
                    <label htmlFor="">Email address</label>
                    <div className="flex relative items-center">
                        <HiEnvelope className="ml-2"/>
                        <input 
                            type="email"
                            placeholder="eg. example@gmail.com"
                            className="placeholder-slate-300 absolute px-8 bg-[#18203A] opacity-50 w-full"
                        />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-y-4 md:gap-y-4">
                    <label htmlFor="">Password</label>
                    <div className="flex relative items-center">
                        <HiLockClosed className="ml-2"/>
                        <input 
                            type="password"
                            placeholder="strong password"
                            className="placeholder-slate-300 absolute px-8 bg-[#18203A] opacity-50 w-full"
                        />
                    </div>        
                </div>

                <Link className="text-right text-blue-400" to={``}>forgot password ?</Link>

                <button className="p-2 bg-orange-500 hover:bg-opacity-50">
                    login
                </button>

                <hr />

                <div className="flex items-center gap-x-4">
                    <input type="checkbox" name="" id="" />
                    <small className="font-light text-xs text-center">Terms and conditions Instantchain @2023</small>
                </div>
                <div className="grid grid-cols-4 ">
                    <FaXTwitter/>
                    <FaDiscord/>
                </div>
            </form>
        </div>
     );
}
 
export default FormContainer;