import React from "react";
import "./App.css";
import { History } from "./History";
import { Balance } from "./Balance/Balance";
import { Income } from "./Income/Income";
import { Expense } from "./Expense/Expense";
import { DescriptionInput } from "./DescriptionInput";
import { AmountInput } from "./AmountInput";
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

  handleClick = () => {
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
        id: new Date().getTime(),
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

  handleDelete = (e, id) => {
    const newArr = this.state.transaction_arr.filter((item) => {
      return item.id !== id;
    });
    this.setState({ transaction_arr: newArr });
  };

  handleUpdate = (amount, id) => {
    const editedArr = [...this.state.transaction_arr];
    editedArr.map((item) => {
      return item.id === id && (item.amt = Number(amount));
    });
    this.setState({ transaction_arr: editedArr });
  };

  render() {
    return (
      <div>
        <h1>Expense Tracker</h1>
        <Balance bal={this.state.transaction_arr} />
        <Income inc={this.state.transaction_arr} />
        <Expense exp={this.state.transaction_arr} />
        <History
          ui={this.state.transaction_arr}
          del={this.handleDelete}
          edit={this.handleUpdate}
        />

        <DescriptionInput
          eventHandler={this.handleChangeHis}
          placeholder="Description"
          value={this.state.history}
        />

        <AmountInput
          eventHandler={this.handleChange}
          placeholder="Enter Amount"
          value={this.state.amount}
        />
        <button onClick={this.handleClick}>Enter Amount</button>
      </div>
    );
  }
}
