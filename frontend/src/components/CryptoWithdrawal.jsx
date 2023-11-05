import {HiArrowLongRight} from 'react-icons/hi2';

const CryptoWithdrawal = () => {
    return ( 
        <div className="flex flex-col gap-y-4">
            <small className="text-slate-200">Bitcoin is the recommended withdrawal method, it provides fastest withdrawal. To request for withdrawal to bitcoin, please you have a bitcoin wallet else create one.</small>
            <form className="text-slate-400 grid grid-cols-1 gap-y-4">
                <div className="flex flex-col">
                    <label>Withdrawal amount:</label>
                    <input 
                        type="number" 
                        name="" 
                        id=""
                        className="rounded-[5px] bg-[#18203A]"
                        placeholder="$ 0.00" 
                    />
                </div>

                <div className="flex flex-col">
                    <label>Bitcoin wallet:</label>
                    <input 
                        type="text" 
                        name="" 
                        id=""
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Transfer code:</label>
                    <input 
                        type="text" 
                        name="" 
                        id=""
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                
                <button
                    className="flex rounded-[5px] p-2 mt-4 bg-blue-700 justify-center items-center"
                >
                    <small>Proceed</small>
                    <HiArrowLongRight/>
                </button>
            </form>
        </div>
     );
}
 
export default CryptoWithdrawal;