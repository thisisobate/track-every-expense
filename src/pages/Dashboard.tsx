import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { RadioButton } from "../components/RadioButtonGroup";
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
    <main>
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
    </main>
  );
};
