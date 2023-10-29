import gif from '../assets/bitcoin1.png'
const HomePage = () => {
    return ( 
        <div className="grid md:grid-cols-2 grid-cols-1 items-center p-[25px] shadow-md shadow-lime-200 border border-orange-500 rounded-[25px] m-auto md:w-10/12 w-11/12 md:h-auto">
            <div className="flex flex-col gap-y-8">
                <h4 className="md:leading-9 leading-7 text-1 text-white md:text-[35px] text-[20px] font-bold">
                 Cyber-Safety, <span className='text-orange-500'>committed</span> to making the Internet safe for everyone, Fiat <span className='text-orange-500'>Recovery</span>, Accounts & Credentials <span className='text-orange-500'>Encryption</span>.
                </h4>

                <button className="p-2 bg-orange-500 text-white md:w-6/12 shadow-md shadow-orange-200">
                    Get Started
                </button>
            </div>
            <div className='flex justify-center'>
                <img src={gif}/>
            </div>
            
        </div>
     );
}
 
export default HomePage;