"use client";
import { useState } from "react";

const TabContainer = () => {
	const tabsData = [
		{
			label: "Primary",
			content: "Lipsum",
		},
		{
			label: "Promotions",
			content: "Lipsum 2",
		},
		{
			label: "Social",
			content: "Lipsum 3",
		},
	];

	const [activeTabIndex, setActiveTabIndex] = useState(0);

	return (
		<div>
			<div className='flex space-x-3 border-b'>
				{/* Loop through tab data and render button for each. */}
				{tabsData.map((tab, idx) => {
					return (
						<button
							key={idx}
							className={`py-2 border-b-4 transition-colors duration-300 ${
								idx === activeTabIndex ? "border-teal-500" : "border-transparent hover:border-gray-200"
							}`}
							// Change the active tab on click.
							onClick={() => setActiveTabIndex(idx)}
						>
							{tab.label}
						</button>
					);
				})}
			</div>
			{/* Show active tab content. */}
			<div className='py-4'>
				<p>{tabsData[activeTabIndex].content}</p>
			</div>
		</div>
	);
};

export { TabContainer };
