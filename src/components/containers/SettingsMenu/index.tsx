interface ISettingsMenuProps {
	isSettingsOpen: boolean;
}

const SettingsMenu: React.FC<ISettingsMenuProps> = ({ isSettingsOpen }) => {
	return (
		<div className={`${!isSettingsOpen ? "w-0" : "w-64"} duration-300 bg-slate-100 shrink grow flex flex-col overflow-hidden`}>
			<div className='w-full rounded px-4 pb-4 flex flex-1'>
				<div className='bg-white rounded-lg flex-1 p-2'>Settings Panel</div>
			</div>
		</div>
	);
};

export { SettingsMenu };
