import { LineChart, TransactionPanel } from '../components';
import {HiArrowTrendingUp} from 'react-icons/hi2'

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 flex-1 gap-x-8 gap-y-4 md:gap-y-0 h-full">
            
            {/* main component */}
            <div className="order-last md:order-none md:col-span-3 flex flex-col gap-y-5">
                {/* 2fa components */}
                <div className='hidden md:flex p-2 gap-x-4 items-center bg-gradient-to-tr from-lime-100 to-green-100 justify-between rounded-md border-solid border-[0.2px] border-green-500'>
                    <div className='text-white'>
                        <small className='text-green-500'>Your account does not have 2FA protection enabled yet. Enable it now to prevent unauthorized access and secure your funds.</small>
                    </div>
                    
                </div>
                
                {/* second component */}
                <div className='md:p-5 p-2 flex flex-col rounded bg-[#18203A] h-72 gap-y-2'>
                    <div className='flex'>
                        <span className='p-1 text-xs text-slate-100'>
                            <h4>Painting the picture</h4>
                        </span>
                        <span className='p-2 rounded-full bg-white'>
                            <HiArrowTrendingUp/>
                        </span>
                    </div>
                    
                    <LineChart/>
                    
                    
                </div>

                {/* Third component */}
                <div className='p-5 rounded bg-[#18203A] h-72'>

                </div>

            </div>

            {/* left sidebar */}
            <div className="flex flex-col gap-y-4">
                <TransactionPanel/>
            </div>
        </div>
      );
}

export default Dashboard;