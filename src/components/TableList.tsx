import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTrash,
  faTimes,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/tableList.css";
import arrowDownIcon from "../images/arrow-down-icon.png";
import arrowUpIcon from "../images/arrow-up-icon.png";
import Modal from "react-modal";
import { Card } from "./Card";

// enum iconName { arrowDown = "faArrowDown"};
// type iconName = typeof faArrowDown | typeof faArrowUp;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
  },
};

interface Props {
  id: string;
  expense: string;
  amount: string;
  date: string;
  iconPrefix?: boolean;
  type: string;
  itemExpandable: boolean;
  onDelete: () => void;
}

export const TableList = React.forwardRef<HTMLDivElement, Props>(
  (props: Props, ref) => {
    const {
      iconPrefix,
      id,
      expense,
      amount,
      type,
      date,
      itemExpandable = false,
      onDelete,
    } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const openModal = () => {
      return setShowModal(true);
    };
  
    const closeModal = () => {
      return setShowModal(false);
    };

    const onClick = () => {
      return setIsOpen(!isOpen);
    };

    const handleDelete = () => {
      onDelete();
      return closeModal();
    }

    return (
      <>
        {expense.length > 0 && (
          <>
            <div ref={ref} className="tableListWrapper" id={id}>
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
                  <FontAwesomeIcon icon={faTrash} onClick={openModal} />
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
            <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="button-sm button-transparent" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} className="button-icon" />
          </button>
          <div className="modal-title">Delete Item</div>
          <div>Are you sure you want to delete item?</div> <br></br>
          <button className="button-md" onClick={handleDelete}>Delete</button>
        </Modal>
          </>
        )}
      </>
    );
  }
);
