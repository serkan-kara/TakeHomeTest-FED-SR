import { TreeMenu } from "../TreeMenu";
import { PencilIcon } from "@heroicons/react/24/solid";

interface ICollapsibleMenuProps {
	isOpen: boolean;
}

const CollapsibleMenu: React.FC<ICollapsibleMenuProps> = ({ isOpen }) => {
	return (
		<div className={`${isOpen ? "w-64" : "w-0"} duration-300 transition-all bg-slate-100 shrink grow flex flex-col overflow-hidden`}>
			<div className='w-full px-4'>
				<button className='rounded-lg flex items-center p-3 bg-white border border-solid border-slate-300 space-x-2'>
					<PencilIcon className='w-4 h-4' />
					<span>Compose</span>
				</button>
				<TreeMenu />
			</div>
		</div>
	);
};

export { CollapsibleMenu };
