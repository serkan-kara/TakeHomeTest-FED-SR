"use client";
import { ReactElement, useState } from "react";
import { InboxIcon, TagIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { MailList } from "../MailList";

type TabContentType = {
	label: string;
	content: ReactElement<HTMLDivElement> | string;
	icon?: JSX.Element;
};

const TabContainer = () => {
	const tabsData: TabContentType[] = [
		{
			label: "Primary",
			content: <MailList />,
			icon: <InboxIcon className='w-5 h-5 text-slate-500' />,
		},
		{
			label: "Promotions",
			content: <MailList />,
			icon: <TagIcon className='w-5 h-5 text-slate-500' />,
		},
		{
			label: "Social",
			content: <MailList />,
			icon: <UserGroupIcon className='w-5 h-5 text-slate-500' />,
		},
	];

	const [activeTabIndex, setActiveTabIndex] = useState(0);

	return (
		<div>
			<div className='flex border-b'>
				{tabsData.map((tab, idx) => {
					return (
						<button
							key={idx}
							className={`w-1/3 text-left py-2 pt-4 pl-4 border-b-4 transition-colors duration-300 text-sm ${
								idx === activeTabIndex ? "border-blue-400" : "border-transparent hover:border-gray-200"
							}`}
							onClick={() => setActiveTabIndex(idx)}
						>
							<div className='flex space-x-2'>
								{tab.icon}
								<span>{tab.label}</span>
							</div>
						</button>
					);
				})}
			</div>
			<div className='py-4'>
				<div>{tabsData[activeTabIndex].content}</div>
			</div>
		</div>
	);
};

export { TabContainer };
