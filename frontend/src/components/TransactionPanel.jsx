import {HiInformationCircle, HiOutlineDocument} from 'react-icons/hi2';
import img from '../assets/bitcoin1.png';

const TransactionPanel = () => {
    return ( 
        <div className="flex flex-col">
            <h4 className='text-white font-semibold text-xl'>My Wallet</h4>
            <div className=" border-slate-50 rounded bg-[#18203A] flex flex-col p-5 items-center gap-y-4">
                <div className='auto rounded-full flex gap-x-2 p-2 bg-slate-300 '>
                    <button className='bg-slate-400 rounded-lg px-2'>withdrawals</button>
                    <button className='bg-slate-400 rounded-lg px-2'>Stake</button>
                </div>

                <div className='border-t-4 border-x-4  p-5 w-[150px] h-[150px] rounded-full flex flex-col border-slate-400 '>
                    
                    <span className='font-bold my-auto  mx-auto flex flex-col gap-y-2'>
                        <small className='mx-auto text-white'>Total Bal.</small>    
                        <h4 className='text-[20px] font-bold gradient-text'>$ 4,500</h4>
                    </span>
                </div>

                <div className='p-3 bg-black rounded-md grid grid-cols-3 text-xs gap-x-2'>
                    <button className='p-2 text-white rounded-md font-bold bg-[#18203A]'>Deposit</button>
                    <button className='p-2 text-white bg-[#18203A] rounded-md font-bold'>withdraw</button>
                    <button className='p-2 text-white bg-[#18203A] rounded-md font-bold'>Transfer</button>
                </div>

                <div className='p-3 bg-black rounded-lg text-white border-yellow-700 border-2'>
                    <span>
                        <h4>Converter</h4>
                    </span>
                    <div className='flex  items-center'>
                        <input type="number" name="" className='rounded-md bg-[#18203A]' 
                            placeholder='amount'
                        />
                        <button className='p-2 '>Conv.</button>
                    </div>
                </div>
            </div>    
                
        </div>
     );
}
 
export default TransactionPanel;