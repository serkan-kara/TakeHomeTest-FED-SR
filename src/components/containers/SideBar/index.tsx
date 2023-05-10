"use client";
import { ButtonPopover } from "@/components/ui/ButtonPopover";
import {
	Bars3Icon,
	EnvelopeIcon,
	ChatBubbleLeftIcon,
	UserGroupIcon,
	VideoCameraIcon,
	PencilIcon,
} from "@heroicons/react/24/outline";
import { TreeMenu } from "../TreeMenu";

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
			<div className='flex flex-col w-16 items-center pt-10 space-y-6'>
				<ButtonPopover
					className='absolute z-50 w-max left-3 -top-4'
					button={
						<EnvelopeIcon className='h-5 w-5 text-black focus:outline-none hover:text-white duration-300 hover:p-2 hover:rounded-full hover:bg-slate-600 hover:w-8 hover:h-8' />
					}
				>
					<div className='w-64 bg-white p-4 shadow-lg rounded-lg border border-solid border-slate-200 flex flex-col divide-y'>
						<div className='flex pb-5 pt-2 items-center space-x-2'>
							<PencilIcon className='w-4 h-4' />
							<span>Compose</span>
						</div>
						<TreeMenu />
					</div>
				</ButtonPopover>

				<ChatBubbleLeftIcon className='h-5 w-5 text-black focus:outline-none hover:text-white duration-300 hover:p-2 hover:rounded-full hover:bg-slate-600 hover:w-8 hover:h-8' />
				<UserGroupIcon className='h-5 w-5 text-black focus:outline-none hover:text-white duration-300 hover:p-2 hover:rounded-full hover:bg-slate-600 hover:w-8 hover:h-8' />
				<VideoCameraIcon className='h-5 w-5 text-black focus:outline-none hover:text-white duration-300 hover:p-2 hover:rounded-full hover:bg-slate-600 hover:w-8 hover:h-8' />
			</div>
		</div>
	);
};

export { SideBar };
