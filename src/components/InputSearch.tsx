import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/inputSearch.css";

interface Props {
  placeholder: string;
}

export const InputSearch = ({ placeholder }: Props) => {
  return (
    <div className="searchContainer">
      <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      <input type="search" placeholder={placeholder} name="" id="" />
      <span>
        <FontAwesomeIcon icon={faSlidersH} className="sliderIcon" />
      </span>
    </div>
  );
};
