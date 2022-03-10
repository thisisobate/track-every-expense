import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/tableList.css";
import arrowDownIcon from "../images/arrow-down-icon.png";
import arrowUpIcon from "../images/arrow-up-icon.png";
import { Card } from "./Card";

// enum iconName { arrowDown = "faArrowDown"};
// type iconName = typeof faArrowDown | typeof faArrowUp;

interface Props {
  expense: string;
  amount: number;
  date: string;
  iconPrefix?: boolean;
  type: string;
  itemExpandable: boolean;
}

export const TableList = (props: Props) => {
  const {
    iconPrefix,
    expense,
    amount,
    type,
    date,
    itemExpandable = false,
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const onClick = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="tableListWrapper">
        <div className="first-column">
          {iconPrefix && (
            <div className="arrowDownIcon">
              <img
                src={type === "debit" ? arrowDownIcon : arrowUpIcon}
                alt={type + " transaction"}
              />
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
            {itemExpandable && !isOpen ? (
              <FontAwesomeIcon icon={faChevronDown} onClick={onClick} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} onClick={onClick} />
            )}
          </div>
        </div>
      </div>
      <div className="tableListWrapper">
        <div className="first-column"></div>
        <div className="flex-right-column-2">
          {isOpen && (
            <Card
              title="expense details"
              description="This is the total details of our expenses for today. Suace code paid on behalf of the house"
            />
          )}
        </div>
      </div>
    </>
  );
};
