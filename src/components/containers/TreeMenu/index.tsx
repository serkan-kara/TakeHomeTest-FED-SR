import {
	InboxIcon,
	StarIcon,
	ClockIcon,
	CheckBadgeIcon,
	PaperAirplaneIcon,
	DocumentIcon,
	TicketIcon,
	UserGroupIcon,
	InformationCircleIcon,
	ChatBubbleLeftRightIcon,
	TagIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./NavItem";
import { INavItem, INavItemList } from "./types";

const TreeMenu = () => {
	const navItems: INavItem[] = [
		{
			label: "Inbox",
			icon: <InboxIcon className='w-4 h-4' />,
		},
		{
			label: "Starred",
			icon: <StarIcon className='w-4 h-4' />,
		},
		{
			label: "Snoozed",
			icon: <ClockIcon className='w-4 h-4' />,
		},
		{
			label: "Important",
			icon: <CheckBadgeIcon className='w-4 h-4' />,
		},
		{
			label: "Sent",
			icon: <PaperAirplaneIcon className='w-4 h-4' />,
		},
		{
			label: "Drafts",
			icon: <DocumentIcon className='w-4 h-4' />,
		},
		{
			label: "Categories",
			child: [
				{
					label: "Social",
					icon: <UserGroupIcon className='w-4 h-4' />,
				},
				{
					label: "Updates",
					icon: <InformationCircleIcon className='w-4 h-4' />,
				},
				{
					label: "Forums",
					icon: <ChatBubbleLeftRightIcon className='w-4 h-4' />,
				},
				{
					label: "Promotions",
					icon: <TagIcon className='w-4 h-4' />,
				},
			],
			icon: <TicketIcon className='w-4 h-4' />,
		},
	];

	return (
		<nav className="py-4">
			{navItems.map((item) => {
				return (
					<NavItem item={item} />
				);
			})}
		</nav>
	);
};

export { TreeMenu };
