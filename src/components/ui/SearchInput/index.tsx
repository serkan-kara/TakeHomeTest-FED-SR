"use client";
import { MagnifyingGlassCircleIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchInput = () => {
	const [isSearchSettingsOpen, setIsSearchSettingsOpen] = useState<boolean>(false);
	return (
		<div className='w-full relative'>
			<div className='flex bg-slate-200 rounded-xl w-full relative items-center px-10'>
				<MagnifyingGlassCircleIcon className='absolute left-3 h-6 w-6 text-slate-600 focus:outline-none' />
				<input
					placeholder='Search in mail'
					className='w-full rounded-xl bg-slate-200 px-1 py-2 focus:outline-none'
					type={"search"}
				/>
				<button className='absolute right-3' onClick={() => setIsSearchSettingsOpen(!isSearchSettingsOpen)}>
					<AdjustmentsHorizontalIcon className=' h-6 w-6 text-slate-600 focus:outline-none' />
				</button>
			</div>
			<div className={`${isSearchSettingsOpen ? "block" : "hidden"} absolute top-10 bg-white w-full`}>
				Search bar
			</div>
		</div>
	);
};

export { SearchInput };
