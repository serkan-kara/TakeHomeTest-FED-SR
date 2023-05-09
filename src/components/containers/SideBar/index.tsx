"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface ISideBarProps {
	setPanelOpen: any;
	isPanelOpen: boolean;
}

const SideBar: React.FC<ISideBarProps> = ({ setPanelOpen, isPanelOpen }) => {
	return (
		<div className='w-20 flex flex-col flex-1 bg-slate-400'>
			<button onClick={() => setPanelOpen(!isPanelOpen)}>
				<Bars3Icon className='h-6 w-6 text-white focus:outline-none' />
			</button>
		</div>
	);
};

export { SideBar };
