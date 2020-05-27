import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { History } from "./History";

function Balance({ bal }) {
  const newSumArray = [...bal];
  let sum = 0;
  newSumArray.forEach((item) => {
    sum += item.amt;
  });
  return (
    <div>
      <h1>Balance:</h1>
      <p>${sum}</p>
    </div>
  );
}

function Income({ inc }) {
  const incArr = [...inc];
  let sum = 0;
  incArr.forEach((item) => {
    if (item.amt >= 0) {
      sum += item.amt;
    }
  });
  return (
    <div>
      <h1>Income:</h1>
      <p>${sum}</p>
    </div>
  );
}

function Expense({ exp }) {
  const expArr = [...exp];
  let sum = 0;
  expArr.forEach((item) => {
    if (item.amt < 0) {
      sum += Math.abs(item.amt);
    }
  });
  console.log(sum);
  return (
    <div>
      <h1>Expense:</h1>
      <p>{sum !== 0 ? `-$${sum}` : "$0"}</p>
    </div>
  );
}

export class ExpenseTracker extends React.Component {
  state = {
    transaction_arr: [],
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
        amt: Number(this.state.amount),
        history: this.state.history,
      };
      this.setState((state) => {
        return state.transaction_arr.push(newIncome);
      });
    }

    if (
      this.state.amount.trim().length !== 0 &&
      Number(this.state.amount) < 0
    ) {
      const newIncome = {
        amt: Number(this.state.amount),
        history: this.state.history,
      };
      this.setState((state) => {
        return state.transaction_arr.push(newIncome);
      });
    }

    this.setState({ history: "", amount: "" });
  };

  render() {
    return (
      <div>
        <h1>Expense Tracker</h1>
        <Balance bal={this.state.transaction_arr} />
        <Income inc={this.state.transaction_arr} />
        <Expense exp={this.state.transaction_arr} />
        <History ui={this.state.transaction_arr} />

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
