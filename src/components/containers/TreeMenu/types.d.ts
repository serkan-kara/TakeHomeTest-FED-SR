export interface INavItemList {
	items: INavItem[];
}

type ItemType = {
	label: string;
	icon: JSX.Element;
};

export interface INavItem {
	label: string;
	icon: JSX.Element;
	child?: ItemType[];
}
