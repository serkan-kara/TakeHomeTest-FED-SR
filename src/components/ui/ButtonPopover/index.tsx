import { Popover, Transition } from "@headlessui/react";
import { QueueListIcon, AcademicCapIcon, ChartBarIcon, ChartPieIcon, CloudArrowUpIcon, CubeIcon, InboxIcon, PrinterIcon, PresentationChartLineIcon, ServerStackIcon } from "@heroicons/react/24/outline";

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
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export { ButtonPopover };
