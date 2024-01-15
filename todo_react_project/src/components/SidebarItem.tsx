import React from "react";

// Define the type for SVG icon props
type IconProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
	className?: string;
};

// Define the type for SVG icon component
type Icon = React.ForwardRefExoticComponent<IconProps>;

// Define the props for SidebarItem component
interface SideBarItemProps {
	icon: Icon;
	text: string;
	active: boolean;
	short: boolean;
	setView: (view: string) => void;
}

// SidebarItem component
const SidebarItem: React.FC<SideBarItemProps> = ({ icon: Icon, text, active, short, setView }) => {

	// Handler function to set the current view and prevent default link behavior
	const setCurrentTab: React.MouseEventHandler<HTMLLIElement> = (event) => {
		event.preventDefault();
		setView(text);
	};

	let content;
	if (short) {
		// Render a short version of the item with an icon and tooltip
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
		// Render a longer version of the item with an icon and text
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

	// Render the list item with the onClick handler
	return <li onClick={setCurrentTab}>{content}</li>;
};

export default SidebarItem;
