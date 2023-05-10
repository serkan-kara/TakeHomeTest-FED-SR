import { INavItem } from "./types";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface INavItemProps {
	item: INavItem;
}

const NavItem: React.FC<INavItemProps> = ({ item }) => {
	return (
		<div className='flex flex-col text-sm'>
			<Disclosure>
				<Disclosure.Button>
					<div className='flex justify-between mb-2 px-2 py-1 hover:bg-slate-300 hover:rounded-lg'>
						<div key={item.label} className='flex space-x-2 items-center'>
							{item.icon}
							<span>{item.label}</span>
						</div>
						{item.child && item.child.length > 0 && <ChevronDownIcon className='w-4 h-4' />}
					</div>
				</Disclosure.Button>
				<Disclosure.Panel className="mt-1">
					{item.child &&
						item.child.length > 0 &&
						item.child.map((child) => {
							return (
								<div key={item.label} className='flex ml-4 space-x-2 items-center mb-2'>
									{child.icon}
									<span>{child.label}</span>
								</div>
							);
						})}
				</Disclosure.Panel>
			</Disclosure>
		</div>
	);
};

export { NavItem };
