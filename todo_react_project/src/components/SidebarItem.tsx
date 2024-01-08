import React from "react";

type IconProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
	className?: string;
};

type Icon = React.ForwardRefExoticComponent<IconProps>;

interface SideBarItemProps {
	icon: Icon;
	text: string;
	active: boolean;
	short: boolean;
	setView: (view: string) => void;
}

const SidebarItem: React.FC<SideBarItemProps> = ({ icon: Icon, text, active, short, setView }) => {

	const setCurrentTab: React.MouseEventHandler<HTMLLIElement> = (event) => {
		event.preventDefault();
		setView(text);
	};

	let content;
	if (short) {
		content = (
				<a
						href="#"
						className={`tooltip tooltip-right rounded-box ${active ? 'active' : ''}`}
						data-tip={text}
				>
					<Icon className="h-5 w-5" />
				</a>
		);
	} else {
		content = (
				<a
						href="#"
						className={`whitespace-nowrap rounded-box ${active ? 'active' : ''}`}
				>
					<Icon className="h-5 w-5" />
					{text}
				</a>
		);
	}

	return <li onClick={setCurrentTab}>{content}</li>;
};

export default SidebarItem;
