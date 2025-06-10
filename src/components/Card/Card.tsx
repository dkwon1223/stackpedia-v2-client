import { FC } from "react";
import { CardProps } from "./props";
import TechnologyDefaultImage from "../../assets/technology_default.png";

const Card: FC<CardProps> = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="card bg-base-300 w-[16em] shadow-md hover:shadow-xl transition-shadow duration-300">
      <figure>
        <img
          src={imageUrl || TechnologyDefaultImage}
          className="w-full h-[12em] object-contain"
          alt="technology logo"
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
