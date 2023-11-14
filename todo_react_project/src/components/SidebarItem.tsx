import React from "react";

type Icon = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>>;

interface Props {
  icon: Icon;
  text: string;
  active?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<Props> = (props) => {
  const {icon: Icon, text, active} = props;

  return (
      <li>
        {active ? (
            <div>
              <Icon className="h-5 w-5"/>
              <span>{text}</span>
            </div>
        ) : (
            <div>
              <Icon className="h-5 w-5"/>
              <span>{text}</span>
            </div>
        )}
      </li>
  );
};


export default SidebarItem;