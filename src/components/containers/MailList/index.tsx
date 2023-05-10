import { StarIcon, TagIcon } from "@heroicons/react/24/outline";

const mails = [
	{
		from: "Etsy",
		label: "Dress in technicolor",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur sit amet dolor sit amet sodales.",
	},
	{
		from: "Etsy",
		label: "Jewelery with story",
		text: "Mauris neque metus, convallis at tincidunt ut, posuere a ipsum.",
	},
	{
		from: "Etsy",
		label: "Booked your trip ?",
		text: "In quis eros imperdiet, tempor nisl eget, consectetur turpis. In hac habitasse platea dictumst.",
	},
	{
		from: "Etsy",
		label: "Earth day hurray!",
		text: "Mauris ac dictum risus, eget viverra leo. Suspendisse vehicula ac ligula at vulputate.",
	},
	{
		from: "Etsy",
		label: "Somethig special for mom",
		text: "Phasellus egestas condimentum tristique. Duis diam nisl, condimentum a orci id, ornare maximus leo.",
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
						<div className='flex max-w-[70%] space-x-4'>
							<span className='whitespace-nowrap overflow-hidden overflow-ellipsis min-w-[200px]'>{mail.label}</span>
							<div className='text-slate-400 whitespace-nowrap overflow-hidden overflow-ellipsis'>
								{mail.text}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export { MailList };
