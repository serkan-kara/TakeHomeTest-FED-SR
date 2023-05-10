import { ToastNotification } from "@/components/ui/ToastNotification";
import { StarIcon, TagIcon, TrashIcon } from "@heroicons/react/24/outline";

const mails = [
	{
		from: "Etsy",
		label: "Dress in technicolor",
		text: "Lorem ipsum dolor sit amet",
	},
	{
		from: "Etsy",
		label: "Jewelery with story",
		text: "Mauris neque metus, convallis at tincidunt ut, posuere a ipsum.",
	},
	{
		from: "Etsy",
		label: "Booked your trip ?",
		text: "In quis eros imperdiet",
	},
	{
		from: "Etsy",
		label: "Earth day hurray!",
		text: "Mauris ac dictum risus",
	},
	{
		from: "Etsy",
		label: "Somethig special for mom",
		text: "Phasellus egestas condimentum tristique.",
	},
	{
		from: "Etsy",
		label: "Voted most popular",
		text: "Nulla nisl augue, venenatis et leo in, auctor aliquet quam. Phasellus lorem tortor",
	},
];

const MailList = () => {
	return (
		<div>
			{mails.map((mail) => {
				return (
					<div key={mail.label} className='flex w-full items-center text-sm border-b border-slate-300 px-4 mb-2 py-1'>
						<div className='flex space-x-1 px-2'>
							<StarIcon className='w-4 h-4 text-slate-400' />
							<TagIcon className='w-4 h-4 text-slate-400' />
						</div>
						<div className='min-w-[100px]'>{mail.from}</div>
						<div className='flex max-w-max space-x-4 mr-auto'>
							<span className='whitespace-nowrap overflow-hidden overflow-ellipsis min-w-[200px]'>{mail.label}</span>
							<div className='text-slate-400'>{mail.text}</div>
						</div>
						<ToastNotification />
					</div>
				);
			})}
		</div>
	);
};

export { MailList };
