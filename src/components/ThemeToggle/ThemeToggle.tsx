import { FC } from "react";
import { useTheme } from "../../context/ThemeContext";
import { ThemeToggleProps } from "./props";

const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  
  const isChecked = theme === 'darkbub';
  
  return (
    <div className="tooltip tooltip-bottom" data-tip={props.tip}>
      <label className="toggle toggle-xl text-base-content">
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={toggleTheme}
        />
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

export default ThemeToggle;
