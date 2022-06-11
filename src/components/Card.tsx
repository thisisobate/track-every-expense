import * as React from "react";
import "../styles/card.css";

interface cardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: cardProps) => {
  return (
    <div className="card">
      <h5>{title}</h5>
      <div>{description || 'no detail found'}</div>
    </div>
  );
};
