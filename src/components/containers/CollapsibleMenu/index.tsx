interface ICollapsibleMenuProps {
    isOpen: boolean
}

const CollapsibleMenu: React.FC<ICollapsibleMenuProps> = ({isOpen}) => {

    return (
        <div className={`${isOpen ? 'w-64' : 'w-0'} duration-300 bg-slate-100 flex-1 flex flex-col`}>dddd</div>
    )
};

export { CollapsibleMenu };
