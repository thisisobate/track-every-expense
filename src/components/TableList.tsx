import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import '../styles/tableList.css';

// enum iconName { arrowDown = "faArrowDown"};
// type iconName = typeof faArrowDown | typeof faArrowUp;

interface Props {
  expense: string;
  amount: number;
  date: string;
  iconPrefix?: boolean;
  itemExpandable: boolean;
}

export const TableList = (props: Props) => {
  const { iconPrefix, expense, amount, date, itemExpandable = false } = props;
  return (
    <div className="tableListWrapper">
      <div className="first-column">
        {iconPrefix && (
          <div className="arrowDownIcon">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        )}
      </div>
      <div className="flex-right-column">
        <div className="text-wrapper">
          <h4>{expense}</h4>
          {date}
        </div>
        <div className="third-column">
          <h3>{amount}</h3>
          {itemExpandable && <FontAwesomeIcon icon={faChevronDown} />}
        </div>
      </div>
    </div>
  );
};
