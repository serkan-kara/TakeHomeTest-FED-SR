import { Popover, Transition } from "@headlessui/react";
import { useRef } from "react";

interface IButtonPopoverProps {
	children: JSX.Element;
	button: JSX.Element;
	className: string;
}

const ButtonPopover: React.FC<IButtonPopoverProps> = ({ children, button, className }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const timeoutDuration = 200;
	let timeout: any;

	const closePopover = () => {
		return buttonRef.current?.dispatchEvent(
			new KeyboardEvent("keydown", {
				key: "Escape",
				bubbles: true,
				cancelable: true,
			})
		);
	};

	const onMouseEnter = (open: any) => {
		clearTimeout(timeout);
		if (open) return;
		return buttonRef.current?.click();
	};

	const onMouseLeave = (open: any) => {
		if (!open) return;
		timeout = setTimeout(() => closePopover(), timeoutDuration);
	};

	return (
		<Popover className='relative flex items-center'>
			{({ open }) => {
				return (
					<>
						<div className='' onMouseLeave={onMouseLeave.bind(null, open)}>
							<Popover.Button
								ref={buttonRef}
								className='outline-none'
								onMouseEnter={onMouseEnter.bind(null, open)}
								onMouseLeave={onMouseLeave.bind(null, open)}
							>
								{button}
							</Popover.Button>
							<Transition
								enter='transition duration-100 ease-out'
								enterFrom='transform scale-95 opacity-0'
								enterTo='transform scale-100 opacity-100'
								leave='transition duration-75 ease-out'
								leaveFrom='transform scale-100 opacity-100'
								leaveTo='transform scale-95 opacity-0'
							>
								<Popover.Panel
									className={className}
									onMouseEnter={onMouseEnter.bind(null, open)}
									onMouseLeave={onMouseLeave.bind(null, open)}
								>
									{children}
								</Popover.Panel>
							</Transition>
						</div>
					</>
				);
			}}
		</Popover>
	);
};

export { ButtonPopover };
