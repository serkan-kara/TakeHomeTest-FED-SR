import { ButtonPopover } from "@/components/ui/ButtonPopover";
import { SearchInput } from "@/components/ui/SearchInput";
import {
	AcademicCapIcon,
	BeakerIcon,
	ChartBarIcon,
	ChartPieIcon,
	CloudArrowUpIcon,
	Cog6ToothIcon,
	CubeIcon,
	InboxIcon,
	PresentationChartLineIcon,
	PrinterIcon,
	QueueListIcon,
	ServerStackIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "../Avatar";

interface INavigationProps {
	setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isSettingsOpen: boolean;
}

const Navigation: React.FC<INavigationProps> = ({ setIsSettingsOpen, isSettingsOpen }) => {
	return (
		<div className='bg-slate-100 flex py-4 pr-4 space-x-2'>
			<div className='flex items-center w-64 px-4'>
				<BeakerIcon className='h-8 w-8 text-black focus:outline-none' />
				<span className='ml-2'>QMail</span>
			</div>
			<SearchInput />
			<button onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
				<Cog6ToothIcon className='h-6 w-6 text-black focus:outline-none' />
			</button>
			<ButtonPopover
				className='absolute z-50 w-max right-0 top-4 text-right'
				button={<QueueListIcon className='w-6 h-6' />}
			>
				<div className='grid grid-cols-3 bg-white gap-3 p-4 rounded-lg drop-shadow'>
					<AcademicCapIcon className='h-6 w-6 text-black focus:outline-none' />
					<ChartBarIcon className='h-6 w-6 text-black focus:outline-none' />
					<ChartPieIcon className='h-6 w-6 text-black focus:outline-none' />
					<CloudArrowUpIcon className='h-6 w-6 text-black focus:outline-none' />
					<CubeIcon className='h-6 w-6 text-black focus:outline-none' />
					<InboxIcon className='h-6 w-6 text-black focus:outline-none' />
					<PrinterIcon className='h-6 w-6 text-black focus:outline-none' />
					<PresentationChartLineIcon className='h-6 w-6 text-black focus:outline-none' />
					<ServerStackIcon className='h-6 w-6 text-black focus:outline-none' />
				</div>
			</ButtonPopover>
			<Avatar />
		</div>
	);
};

export { Navigation };
