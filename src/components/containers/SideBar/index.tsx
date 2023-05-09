"use client";

interface ISideBarProps {
	setPanelOpen: any;
	isPanelOpen: boolean;
}

const SideBar: React.FC<ISideBarProps> = ({ setPanelOpen, isPanelOpen }) => {
	return (
		<div className='w-20 h-screen bg-slate-400'>
			<button onClick={() => setPanelOpen(!isPanelOpen)}>Toggle</button>
		</div>
	);
};

export { SideBar };
