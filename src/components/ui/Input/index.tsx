interface IInputProps {
	label?: string;
    className?: string;
}

const Input: React.FC<IInputProps> = ({ label }) => {
	return (
		<>
			{label ? (
				<div className='flex items-center mb-2'>
					<span className="text-sm text-slate-500 w-[100px]">{label}</span>
					<input className='w-full outline-none rounded-none border-b border-solid border-slate-200 text-slate-600 text-sm focus:py-2 duration-200' />
				</div>
			) : (
				<input className='w-full outline-none border border-solid border-slate-200 rounded-md' />
			)}
		</>
	);
};

export { Input };
