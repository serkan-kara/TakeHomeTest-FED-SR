"use client";

import { useState } from "react";
import { CollapsibleMenu } from "../CollapsibleMenu";
import { SideBar } from "../SideBar";

const LeftPanel = () => {
	const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

	return (
		<div className='flex'>
			<SideBar setPanelOpen={setIsPanelOpen} isPanelOpen={isPanelOpen} />
			<CollapsibleMenu isOpen={isPanelOpen} />
		</div>
	);
};

export { LeftPanel };
