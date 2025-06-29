import { FC } from "react";
import { CardProps } from "./props";
import TechnologyDefaultImage from "../../assets/logos/technology-default.png";
import { useTheme } from "../../context/ThemeContext";

const Card: FC<CardProps> = ({ title, description, buttonText, logo, onButtonClick }) => {
  const { theme } = useTheme();

  return (
    <div className="card bg-base-100 border-2 border-base-300 border-base-100 w-[12em] md:w-[13em] lg:w-[14em] xl:w-[15em] shadow-md hover:shadow-xl transition-shadow duration-300">
      <figure className="p-2">
        <img
          src={(theme == 'darkbub' && logo.dark ? logo.dark : logo.image) || TechnologyDefaultImage}
          className="w-[10em] h-[10em] object-contain"
          alt={logo.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onButtonClick}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
