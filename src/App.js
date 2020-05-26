import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function Balance(props) {
  return (
    <div>
      <h1>Balance:</h1>
      <p>{props.p}</p>
    </div>
  );
}

function Income(props) {
  return (
    <div>
      <h1>Income:</h1>
      <p>{props.p}</p>
    </div>
  );
}

function Expense(props) {
  return (
    <div>
      <h1>Expense:</h1>
      <p>{props.p}</p>
    </div>
  );
}

export class ExpenseTracker extends React.Component {
  state = {
    transaction_arr: {
      bal: [],
      inc: [],
      exp: [],
    },
    amount: "",
    history: "",
  };

  handleChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleChangeHis = (e) => {
    this.setState({ history: e.target.value });
  };

  handleClick = (e) => {
    if (this.state.amount.trim().length === 0) {
      return;
    }

    if (
      this.state.amount.trim().length !== 0 &&
      Number(this.state.amount) >= 0
    ) {
      const newIncome = {
        income: Number(this.state.amount),
        history: this.state.history,
      };
      this.setState((state) => {
        return state.transaction_arr.inc.push(newIncome);
      });
    }

    if (
      this.state.amount.trim().length !== 0 &&
      Number(this.state.amount) < 0
    ) {
      const newIncome = {
        expense: Number(this.state.amount),
        history: this.state.history,
      };
      this.setState((state) => {
        return state.transaction_arr.exp.push(newIncome);
      });
    }

    this.setState({ history: "", amount: "" });
  };

  render() {
    return (
      <div>
        <h1>Expense Tracker</h1>
        <Balance p={this.state.bal} />
        <Income p={this.state.inc} />
        <Expense p={this.state.exp} />
        {/* <History /> */}

        <input
          onChange={this.handleChangeHis}
          placeholder="What was the need ?"
          value={this.state.history}
        />

        <input
          onChange={this.handleChange}
          type="number"
          placeholder="Enter Amount"
          value={this.state.amount}
        />
        <button onClick={this.handleClick}>Enter Amount</button>
      </div>
    );
  }
}
