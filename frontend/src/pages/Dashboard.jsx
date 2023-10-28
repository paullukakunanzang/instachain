import {HiInformationCircle, HiOutlineDocument} from 'react-icons/hi2';
import img from '../assets/bitcoin1.png';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 flex-1 gap-x-8 h-full">
            {/* main component */}
            <div className="md:col-span-3 flex flex-col gap-y-5">
                {/* 2fa components */}
                <div className='grid grid-cols-4 p-5 gap-x-4 rounded-md border-solid border-[0.2px] border-slate-100'>
                    <div className='col-span-3 text-white'>
                        <h4 className='font-semibold'>Stay Safe! Enable 2-Factor Authentication Now!</h4>
                        <small className='text-[#FAFAFF]'>Your account does not have 2FA protection enabled yet. Enable it now to prevent unauthorized access and secure your funds.</small>
                    </div>
                    <div className=''>
                        <button className='md:w-8/12 p-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:opacity-50'>Enable 2FA</button>
                    </div>
                </div>

                {/* second component */}
                <div className='p-5 rounded bg-[#18203A] h-72'>

                </div>

                {/* Third component */}
                <div className='p-5 rounded bg-[#18203A] h-72'>

                </div>

            </div>

            {/* left sidebar */}
            <div className="flex flex-col gap-y-4">
                <h4 className='text-white font-semibold text-xl'>My Wallet</h4>
                <div className=" border-slate-50 rounded bg-[#18203A]">
                    <div className="p-5 flex flex-col items-center text-white gap-y-4">
                        <span className="flex items-center gap-x-2">
                            <small>Total Assets</small>
                            <HiInformationCircle/>
                        </span>

                        <span>
                            <h4 className="font-semibold text-2xl ">0.00000000 BTC</h4>
                        </span>
                    </div>
                    <hr />
                    <div className="p-5  text-white flex flex-col items-center gap-y-2">
                        <div className='p-5 rounded-full bg-orange-200 m-auto'>
                            <HiOutlineDocument size={40} color='orange'/>
                        </div>
                        <h4>No Transactions</h4>
                        <h4>No transactions recorded yet</h4>
                    </div>
                </div>

                <div className=" border-slate-50 rounded bg-[#18203A] p-5 items-center flex">
                    <img src={img} alt="img"className='m-auto' />
                </div>
            </div>
        </div>
      );
}

export default Dashboard;