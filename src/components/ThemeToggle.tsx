
import { FC, ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleProps {
    tip?: string;
    icon1: ReactNode;
    icon2: ReactNode;
}

const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  
  const isChecked = theme === 'luxury';
  
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
