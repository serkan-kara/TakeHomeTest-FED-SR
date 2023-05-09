import { Popover, Transition } from "@headlessui/react";
import { QueueListIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const ButtonPopover = () => {
	return (
		<Popover className='relative flex items-center'>
			<Popover.Button className='outline-none'>
				<QueueListIcon className='w-6 h-6' />
			</Popover.Button>
			<Transition
				enter='transition duration-100 ease-out'
				enterFrom='transform scale-95 opacity-0'
				enterTo='transform scale-100 opacity-100'
				leave='transition duration-75 ease-out'
				leaveFrom='transform scale-100 opacity-100'
				leaveTo='transform scale-95 opacity-0'
			>
				<Popover.Panel className='absolute z-50 w-max right-0 top-4 text-right'>
					<div className='flex flex-wrap bg-white rounded-md justify-between px-4 py-4'>
                        <div className="grow w-[33%] flex items-center justify-center bg-red-200 rounded-lg mb-4">
                            <AcademicCapIcon  className='h-6 w-6 text-black focus:outline-none' />
                        </div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export { ButtonPopover };
