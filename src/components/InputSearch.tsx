import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../images/search.png";
import "../styles/inputSearch.css";

interface Props {
  placeholder: string;
  activateFilter?: boolean;
  onChange: () => void;
}

export const InputSearch = React.forwardRef<HTMLInputElement, Props>(({ placeholder, onChange, activateFilter = false }: Props, ref) => {
  return (
    <div className="searchContainer">
      <img src={searchIcon} alt="search" className="searchIcon" />
      <input ref={ref} type="search" placeholder={placeholder} onChange={onChange} name="" id="" />
      {activateFilter && (
        <span>
          <FontAwesomeIcon icon={faSlidersH} className="sliderIcon" />
        </span>
      )}
    </div>
  );
});
