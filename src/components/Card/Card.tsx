import { FC } from "react";
import { CardProps } from "./props";
import TechnologyDefaultImage from "../../assets/logos/technology-default.png";
import { useTheme } from "../../context/ThemeContext";

const Card: FC<CardProps> = ({ title, description, buttonText, logo }) => {
  const { theme } = useTheme();

  return (
    <div className="card bg-base-300 w-[16em] shadow-md hover:shadow-xl transition-shadow duration-300">
      <figure className="p-2">
        <img
          src={(theme == 'darkbub' && logo.dark ? logo.dark : logo.image) || TechnologyDefaultImage}
          className="w-[12em] h-[12em] object-contain"
          alt={logo.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
