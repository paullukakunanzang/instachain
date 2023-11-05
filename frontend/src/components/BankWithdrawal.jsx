import { useState } from 'react';
import {HiArrowLongRight} from 'react-icons/hi2';

const BankWithdrawal = () => {
    
    const [formData, setFormData] = useState({
        amount: '',
        bankName: '',
        acctName: '',
        acctNo: '',
        routingNo: '',
        code: ''
    }) 
    
    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.table(formData)
    }

    return ( 
        <div className="flex flex-col gap-y-4">
            <small className="text-slate-200">To Request for withdrawal via Bank Transfer, please make atleast one trading deposit by using the selected method, if you have you can proceed</small>

            <form onSubmit={handleSubmit} className="text-slate-400 grid grid-cols-1 gap-y-2">
                <div className="flex flex-col">
                    <label>Withdrawal amount:</label>
                    <input 
                        type="number" 
                        name="amount" 
                        id=""
                        value={formData.amount}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                        placeholder="$ 0.00" 
                    />
                </div>

                <div className="flex flex-col">
                    <label>Bank Name:</label>
                    <input 
                        type="text" 
                        name="bankName" 
                        id=""
                        value={formData.bankName}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Account Name:</label>
                    <input 
                        type="text" 
                        name="acctName" 
                        id=""
                        value={formData.acctName}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Account Number:</label>
                    <input 
                        type="number" 
                        name="acctNo" 
                        id=""
                        value={formData.acctNo}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Routing Number:</label>
                    <input 
                        type="text" 
                        name="routingNo" 
                        id=""
                        value={formData.routingNo}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Transfer Code:</label>
                    <input 
                        type="text" 
                        name="code" 
                        id=""
                        value={formData.code}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <button
                    type='submit'
                    className="flex rounded-[5px] p-2 bg-blue-700 mt-4 justify-center items-center"
                >
                    <small>Proceed</small>
                    <HiArrowLongRight/>
                </button>
            </form>
        </div>
     );
}
 
export default BankWithdrawal;