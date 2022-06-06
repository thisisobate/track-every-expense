import React, { FormEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSync,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { RadioButton } from "../components/RadioButtonGroup";
import { InputSearch } from "../components/InputSearch";
import { TableList } from "../components/TableList";
import Modal from "react-modal";
import logoutIcon from "../images/logout.png";
import "../styles/dashboard.css";

const radioButtonOptions = [
  {
    value: "transactions",
    label: "Transactions",
  },
  {
    value: "todo",
    label: "Todo",
  },
];

const transactionList = [
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "credit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
    type: "debit",
  },
];

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

export const DashboardPage = () => {
  const currentDate = new Date();
  const dateTime = currentDate.toString().split(" ");
  const formattedDate = `${dateTime[2]} ${dateTime[1]}, ${dateTime[3]}`;
  const [value, setValue] = React.useState("transactions");
  const [showModal, setShowModal] = React.useState(false);
  const [transactionMap, setTransactionMap] = React.useState([{ id :"", expense: "", date: "", amount: "", type: "" }]);
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleOnClick = (option: any) => {
    if (option) {
      return setValue(option.value);
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const formDataValue: { [key: string]: string } = {};
    for (const [key, value] of formData) {
      formDataValue[key] = String(value);
    }
    const stringifyFormData = JSON.stringify(formDataValue);
    localStorage.setItem('expense data', stringifyFormData);
    const newTransactionList = JSON.parse(localStorage.getItem('expense data') as string);
    
    setTransactionMap(prev => [...prev, newTransactionList]);
    console.log(transactionMap)
    closeModal();
  };

  const openModal = () => {
    return setShowModal(true);
  };

  const closeModal = () => {
    return setShowModal(false);
  };

  return (
    <main className="main">
      <section className="flex-container">
        <div className="greeting">
          {formattedDate} <br />
          <span>How far, Daze</span>
        </div>
        <div>
          <img src={logoutIcon} alt="sign out" />
        </div>
      </section>
      <section className="dashboard">
        <div>Home Balance wey remain</div>
        <h2>$40,000</h2>
      </section>
      <section className="radioGroup">
        {radioButtonOptions.map((o, i) => (
          <RadioButton
            active={value === o.value}
            key={`o.label-${i}`}
            onChange={() => handleOnClick(o)}
            onClick={() => handleOnClick(o)}
            id={o.value}
          >
            {o.label}
          </RadioButton>
        ))}
      </section>
      <section className="searchBox">
        <InputSearch placeholder="search transactions..." />
      </section>
      <section>
      {value === "transactions" && transactionMap.length ===
       0 &&
          <div>
            Welcome to Expense Tracker App! <br /><br />
            <button
              className="button button-md"
              type="submit"
              onClick={openModal}
            >
              Get Started
            </button>
          </div>
          }
        {value === "transactions" && transactionMap.length > 1 &&
          transactionMap.map((o, i) => (
            <TableList
              key={`o.expense-${i}`}
              expense={o.expense}
              date={o.date}
              amount={o.amount}
              type={o.type}
              itemExpandable={true}
              iconPrefix={true}
            />
          ))}
        {value === "todo" && <div>Coming soon!</div>}
      </section>
      <footer style={{ position: "absolute" }}>
        {value === "transactions" && transactionMap.length > 1 && (
          <div className="footer-wrapper">
            <button
              className="button button-sm button-transparent"
              type="submit"
            >
              <FontAwesomeIcon icon={faSync} className="button-icon" />
            </button>
            <button
              className="button button-md"
              type="submit"
              onClick={openModal}
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="button-icon button-icon-left"
              />
              Add Item
            </button>
          </div>
        )}
        {console.log(localStorage)}
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="button-sm button-transparent" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} className="button-icon" />
          </button>
          <div className="modal-title">I am a modal</div>
          <form ref={formRef} onSubmit={(event) => handleFormSubmit(event)}>
            <div className="flex flex-column modal-input space-between">
              <label>expense</label>
              <input name="expense" type="text" />
            </div>
            <div className="flex flex-column modal-input">
              <label>amount</label>
              <input name="amount" type="number" />
            </div>
            <div className="flex flex-column modal-input">
              <label>type</label>
              <input name="type" type="text" />
            </div>
            <button className="button button-md">Add</button>
          </form>
        </Modal>
      </footer>
    </main>
  );
};
