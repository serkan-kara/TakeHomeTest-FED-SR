import { Popover, Transition } from "@headlessui/react";

interface IButtonPopoverProps {
	children: JSX.Element;
	button: JSX.Element;
	className: string;
}

const ButtonPopover: React.FC<IButtonPopoverProps> = ({ children, button, className }) => {
	return (
		<Popover className='relative flex items-center'>
			<Popover.Button className='outline-none'>{button}</Popover.Button>
			<Transition
				enter='transition duration-100 ease-out'
				enterFrom='transform scale-95 opacity-0'
				enterTo='transform scale-100 opacity-100'
				leave='transition duration-75 ease-out'
				leaveFrom='transform scale-100 opacity-100'
				leaveTo='transform scale-95 opacity-0'
			>
				<Popover.Panel className={className}>{children}</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export { ButtonPopover };
