import React from "react";

type Icon = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>>;

interface Props {
	icon: Icon;
	text: string;
	active?: boolean;
	short?: boolean;
}

const SidebarItem: React.FC<Props> = (props) => {
	const { icon: Icon, text, active, short } = props;

	let content;
	if (short) {
		content = (
			<a className={`tooltip tooltip-right rounded-box ${active ? 'active' : ''}`}
			   data-tip={text}>
				<Icon className="h-5 w-5"/>
			</a>
		);
	} else {
		content = (
			<a className={`rounded-box ${active ? 'active' :''}`}>
				<Icon className="h-5 w-5" />
				{text}
			</a>
		);
	}
	return <li>{content}</li>;
};


export default SidebarItem;