import { FC, ReactNode } from "react";

interface ToggleIconProps {
    tip?: string;
    icon1: ReactNode;
    icon2: ReactNode;
    toggleHandler?: () => void;
}

const ToggleIcon: FC<ToggleIconProps> = (props) => {
  return (
    <div className="tooltip tooltip-bottom" data-tip={props.tip}>
      <label className="toggle toggle-xl text-base-content">
        <input type="checkbox" onChange={props.toggleHandler}/>
        <div className="tooltip tooltip-bottom">
          {props.icon1}
        </div>
        <div className="tooltip tooltip-bottom">
          {props.icon2}
        </div>
      </label>
    </div>
  );
};

export default ToggleIcon;
