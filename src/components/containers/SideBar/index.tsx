"use client";
import { Bars3Icon, EnvelopeIcon, ChatBubbleLeftIcon, UserGroupIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

interface ISideBarProps {
	setPanelOpen: any;
	isPanelOpen: boolean;
}

const SideBar: React.FC<ISideBarProps> = ({ setPanelOpen, isPanelOpen }) => {
	return (
		<div className='flex flex-col flex-1 bg-slate-200 items-center pt-4'>
			<button onClick={() => setPanelOpen(!isPanelOpen)}>
				<Bars3Icon className='h-6 w-6 text-black focus:outline-none' />
			</button>
			<div className="flex flex-col w-16 items-center pt-10 space-y-6">
				<EnvelopeIcon className="h-5 w-5 text-black focus:outline-none hover:text-slate-400 duration-300" />
				<ChatBubbleLeftIcon className="h-5 w-5 text-black focus:outline-none hover:text-slate-400 duration-300" />
				<UserGroupIcon className="h-5 w-5 text-black focus:outline-none hover:text-slate-400 duration-300" />
				<VideoCameraIcon className="h-5 w-5 text-black focus:outline-none hover:text-slate-400 duration-300" />
			</div>
		</div>
	);
};

export { SideBar };
