interface ISettingsMenuProps {
	isSettingsOpen: boolean;
}

const SettingsMenu: React.FC<ISettingsMenuProps> = ({ isSettingsOpen }) => {
	return (
		<div
			className={`${
				isSettingsOpen ? "w-64" : "w-0"
			} bg-slate-100 shrink grow flex flex-col`}
		>
			<div className='w-full rounded px-4 pb-4 flex flex-1'>
                <div className="bg-white rounded-lg flex-1 p-2">Settings Panel</div>
            </div>
		</div>
	);
};

export { SettingsMenu };
