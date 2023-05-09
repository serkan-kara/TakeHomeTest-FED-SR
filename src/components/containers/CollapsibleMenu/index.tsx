interface ICollapsibleMenuProps {
	isOpen: boolean;
}

const CollapsibleMenu: React.FC<ICollapsibleMenuProps> = ({ isOpen }) => {
	return (
		<div className={`${isOpen ? "w-64" : "w-0"} duration-300 transition-all bg-slate-100 shrink grow flex flex-col`}>
			<div className="w-64 px-4">
                Side Menu
            </div>
		</div>
	);
};

export { CollapsibleMenu };
