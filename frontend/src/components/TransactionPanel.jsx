import {HiOutlineDocumentPlus} from 'react-icons/hi2';
import img from '../assets/bitcoin1.png';
import { useState } from 'react';
import FullScreenModal from './fullScreenModal';
import { useAuthContext } from '../hooks/useAuthContext';
import DepositForm from './DepositForm';
import WithdrawalForm from './WithdrawalForm';

const TransactionPanel = ({transactions=false}) => {

    const {user} = useAuthContext()
    const [modal, setModal] = useState(false)
    const [depositModal, setDepositModal] = useState(false)
    const [withdrawalModal, setWithdrawalModal] = useState(false)

    return ( 
        <div className="flex flex-col w-full">
            <h4 className='text-white font-semibold hidden md:flex md:text-xl'>My Wallet</h4>
            <div className="border-slate-50 rounded bg-[#18203A] flex flex-col p-5 items-center gap-y-4">
                <div className='auto rounded-full flex gap-x-2 p-2 bg-slate-300 '>
                    <button className='bg-slate-400 rounded-lg text-slate-100 px-2'>withdrawals</button>
                    <button className='bg-purple-400 font-bold text-purple-100 rounded-lg px-2'>Stake</button>
                </div>

                <div className='border-t-4 border-x-4  p-5 w-[150px] h-[150px] rounded-full flex flex-col border-slate-400 '>
                    
                    <span className='font-bold my-auto  mx-auto flex flex-col gap-y-2'>
                        <small className='mx-auto text-white'>Total Bal.</small>    
                        {user && <h4 className='text-[20px] font-bold gradient-text'>$ {user.data.accountBalance}</h4>}
                    </span>
                </div>

                <div className='p-3 bg-black rounded-md flex text-xs gap-x-2'>
                    {user && !user.data.isAdmin && <button onClick={()=>{setDepositModal(true)}} className='p-2 text-white rounded-md font-bold bg-[#18203A]'>Deposit</button>}
                    <button onClick={()=>{setWithdrawalModal(true)}} className='p-2 text-white bg-[#18203A] rounded-md font-bold'>withdraw</button>
                    <button onClick={()=>{setModal(true)}} className='p-2 text-white bg-[#18203A] rounded-md font-bold'>Invest</button>
                </div>

                <div className='p-3 bg-black rounded-lg text-white'>
                    {
                        transactions ?
                        (``)
                        :
                        (
                            <div className='flex flex-col items-center gap-y-4'>
                                <span className='p-4 rounded-full bg-[#18203A]'>
                                    <HiOutlineDocumentPlus size={30}/>
                                </span>

                                No Transaction ...
                            </div>
                        )
                    }
                </div>
            </div>    
              {modal && <FullScreenModal close={()=>{setModal(false)}}/>}  
              {depositModal && <FullScreenModal children={<DepositForm/>} close={()=>{setDepositModal(false)}}/>}  
              {withdrawalModal && <FullScreenModal children={<WithdrawalForm/>} close={()=>{setWithdrawalModal(false)}}/>}  
        </div>
     );
}
 
export default TransactionPanel;