import React from "react";
import "./card.css";

interface CardProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, text, icon }) => {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
