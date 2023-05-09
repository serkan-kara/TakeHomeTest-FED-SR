"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SideMenu = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	return (
		<div className='relative min-h-screen bg-slate-400'>
			<button className='' onClick={(e) => setMenuOpen(!menuOpen)}>
				<Bars3Icon className='h-6 w-6 text-white focus:outline-none' />
			</button>
			<div></div>
			<div
				id='side-menu'
				className={`bg-blue-800 text-blue-100 w-64 min-h-screen inset-y-0 left-0 ${
					menuOpen ? "-translate-x-0" : "-translate-x-full"
				}  transition duration-200 ease-in-out`}
			>
				Test
			</div>
		</div>
	);
};

export { SideMenu };
