interface ICollapsibleMenuProps {
    isOpen: boolean
}

const CollapsibleMenu: React.FC<ICollapsibleMenuProps> = ({isOpen}) => {

    return (
        <div className={`${isOpen ? 'w-64' : 'w-0'} duration-300 h-screen bg-slate-100`}>dddd</div>
    )
};

export { CollapsibleMenu };
