import { Link } from "react-router-dom";

const Logo = ({text=true}) => {
    return ( 
        <Link to={`/home`} className="flex items-center gap-x-2">
            <h4 className="px-2 rounded-md bg-orange-500 text-white text-2xl font-bold">In</h4>
            {text && <small className="text-white font-semibold">Instantchain</small>}
        </Link>
     );
}
 
export default Logo;