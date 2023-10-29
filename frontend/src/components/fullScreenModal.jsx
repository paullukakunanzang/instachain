import {HiOutlineXMark} from 'react-icons/hi2'

const FullScreenModal = () => {
    return ( 
        <div className="inset-0 fixed w-full h-screen bg-[#18203A] bg-opacity-80 flex ">
            <div className="flex flex-col md:w-5/12 w-11/12 p-5 rounded-lg m-auto bg-[#0A0A0B]">
                <HiOutlineXMark size={20} className='self-end'/>
            </div>
        </div>
     );
}
 
export default FullScreenModal;