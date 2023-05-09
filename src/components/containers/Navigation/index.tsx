import { ButtonPopover } from "@/components/ui/ButtonPopover";
import { SearchInput } from "@/components/ui/SearchInput";
import { BeakerIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

interface INavigationProps {
	setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isSettingsOpen: boolean;
}

const Navigation: React.FC<INavigationProps> = ({ setIsSettingsOpen, isSettingsOpen }) => {
	return (
		<div className='bg-slate-100 flex py-4'>
			<div className='flex items-center w-64 px-4'>
				<BeakerIcon className='h-8 w-8 text-black focus:outline-none' />
				<span className='ml-2'>QMail</span>
			</div>
			<SearchInput />
			<button onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
				<Cog6ToothIcon className='h-6 w-6 text-black focus:outline-none' />
			</button>
			<ButtonPopover />
		</div>
	);
};

export { Navigation };
