const DepositForm = () => {
    return ( 
        <div className="grid grid-cols-1">
            <form className="flex flex-col gap-y-4 items-center">
                <select 
                    name="" 
                    id=""
                    className="w-full"
                >
                    <option>select user</option>
                </select>

                <input
                    type="number"
                    className="w-full"
                    placeholder="eg. $500"
                />

                <button className="p-2 bg-blue-500 w-full text-white shadow shadow-white">
                    credit
                </button>
            </form>
        </div>
     );
}
 
export default DepositForm;