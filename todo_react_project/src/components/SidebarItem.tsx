import React from "react";

type Icon = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>>;

interface Props {
	icon: Icon;
	text: string;
	active?: boolean;
	alert?: boolean;
}

const SidebarItem: React.FC<Props> = (props) => {
	const { icon: Icon, text, active, alert } = props;

	return (
		<li className="flex items-centerw">
			{/* Render the SVG icon */}
			<Icon className="h-5 w-5" />
			<span>{text}</span>
			<span>{active}</span>
			<span>{alert}</span>
		</li>
	);
};

export default SidebarItem;