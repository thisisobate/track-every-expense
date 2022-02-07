import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSync,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { RadioButton } from "../components/RadioButtonGroup";
import { InputSearch } from "../components/InputSearch";
import { TableList } from "../components/TableList";
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
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
  {
    expense: "Electricity",
    amount: 10000,
    date: "24th March",
  },
];

export const DashboardPage = () => {
  const currentDate = new Date();
  const dateTime = currentDate.toString().split(" ");
  const formattedDate = `${dateTime[2]} ${dateTime[1]}, ${dateTime[3]}`;
  const [value, setValue] = React.useState("transactions");

  const handleOnClick = (option: any) => {
    if (option) {
      return setValue(option.value);
    }
  };
  return (
    <main className="main">
      <section className="flex-container">
        <div className="greeting">
          {formattedDate} <br />
          <span>How far, Daze</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faSignOutAlt} />
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
            id={`option-${o.value}-${Math.random()}`}
          >
            {o.label}
          </RadioButton>
        ))}
      </section>
      <section className="searchBox">
        <InputSearch placeholder="search transactions..." />
      </section>
      <section>
        {transactionList.map((o, i) => (
          <TableList
            key={`o.expense-${i}`}
            expense={o.expense}
            date={o.date}
            amount={o.amount}
            itemExpandable={true}
            iconPrefix={true}
          />
        ))}
      </section>
      <footer style={{ position: "absolute" }}>
        <div className="footer-wrapper">
          <button className="button button-sm button-transparent" type="submit">
            <FontAwesomeIcon icon={faSync} className="button-icon" />
          </button>
          <button className="button button-md" type="submit">
            <FontAwesomeIcon icon={faPlus} className="button-icon" />
            Add Item
          </button>
        </div>
      </footer>
    </main>
  );
};
