import gif from '../assets/bitcoin1.png'
const HomePage = () => {
    return ( 
        <div className="grid md:grid-cols-1 grid-cols-1 items-center p-[25px]">
            <div className="flex flex-col gap-y-8 w-8/12 m-auto">
                <h4 className="md:leading-10 gradient-text text-center leading-7 text-1 md:text-[40px] text-[20px] font-bold">
                 Cyber-Safety, committed to making the Internet safe for everyone, Fiat Recovery, Accounts & Credentials Encryption.
                </h4>

                <button className="p-2 bg-orange-500 m-auto text-white md:w-4/12 shadow-md shadow-orange-200">
                    Get Started
                </button>
            </div>
            {/* <div className='flex justify-center'>
                <img src={gif}/>
            </div> */}
            
        </div>
     );
}
 
export default HomePage;