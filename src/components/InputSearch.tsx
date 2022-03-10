import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../images/search.png";
import "../styles/inputSearch.css";

interface Props {
  placeholder: string;
  activateFilter?: boolean;
}

export const InputSearch = ({ placeholder, activateFilter = false }: Props) => {
  return (
    <div className="searchContainer">
      <img src={searchIcon} alt="search" className="searchIcon" />
      <input type="search" placeholder={placeholder} name="" id="" />
      {activateFilter && (
        <span>
          <FontAwesomeIcon icon={faSlidersH} className="sliderIcon" />
        </span>
      )}
    </div>
  );
};
