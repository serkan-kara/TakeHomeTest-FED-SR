"use client";
import { MagnifyingGlassCircleIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

const SearchInput = () => {
	const [isSearchSettingsOpen, setIsSearchSettingsOpen] = useState<boolean>(false);
	const searchMenuRef = useRef<HTMLDivElement>(null);

	// handle click outside of menu div
	useEffect(() => {
		function handleClickOutside(event: Event) {
			if (searchMenuRef.current && !searchMenuRef.current.contains(event.target as Element)) {
				setIsSearchSettingsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [searchMenuRef]);

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
			<div
				ref={searchMenuRef}
				className={`${isSearchSettingsOpen ? "block" : "hidden"} absolute top-10 bg-white w-full drop-shadow p-4`}
			>
				<Input label='From' />
				<Input label='To' />
				<Button align='right' className='bg-blue-500 rounded-md w-auto' text='Search' />
			</div>
		</div>
	);
};

export { SearchInput };
