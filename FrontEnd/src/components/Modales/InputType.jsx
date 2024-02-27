function InputType({
    value,
    callback,
    placeholderInput,
    label,
    disabled=false,
    typeInput
}) {
  return (
    <div className="w-full flex flex-col gap-1 items-left">
        <label className='text-lg font-bold tracking-wider italic pl-1'>{label}</label>
        <input
            className='placeholder:text-gray-500 placeholder:italic placeholder:text-lg outline-none tracking-wider bg-gray-50 cursor-pointer border rounded-md px-6 py-2 border-black' 
            type={typeInput}
            value={value}
            onChange={(e)=>callback(e.target.value)}
            disabled={disabled} 
            placeholder={placeholderInput}
        />
    </div>
  )
}

export default InputType;
