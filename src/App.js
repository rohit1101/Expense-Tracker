import React from "react";
import "./App.css";
import "./media-App.css";
import { History } from "./History";
import { Balance } from "./Balance/Balance";
import { DescriptionInput } from "./DescriptionInput";
import { AmountInput } from "./AmountInput";
import * as api from "./api";

export class ExpenseTracker extends React.Component {
  state = {
    transaction_arr: [],
    amount: "",
    history: "",
  };

  async componentDidMount() {
    const transactions = await api.getExpenses();
    console.log(transactions);

    this.setState({
      transaction_arr: transactions || [],
    });
  }

  async componentDidUpdate(_, prevState) {
    const { transaction_arr } = this.state;
    console.log("UPDATE->", prevState, this.state);
    if (prevState.transaction_arr !== transaction_arr) {
      console.log("PUTTING", transaction_arr);
      await api.putExpenses(transaction_arr);
    }
  }

  handleChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleChangeHis = (e) => {
    this.setState({ history: e.target.value });
  };

  handleClick = () => {
    if (
      this.state.amount.trim().length === 0 ||
      this.state.history.trim().length === 0
    ) {
      alert("Fill all the fields");
      return;
    }
    const newTxn = {
      amt: Number(this.state.amount),
      history: this.state.history,
      id: new Date().getTime(),
    };

    const newArr = [...this.state.transaction_arr];
    newArr.push(newTxn);

    this.setState({ history: "", amount: "", transaction_arr: newArr });
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
      <div className="container">
        <div className="main">
          <h1 style={{ fontSize: "3.5rem" }}>Expense Tracker</h1>
          <Balance bal={this.state.transaction_arr} />
          <h3 style={{ fontSize: "2rem" }}>History</h3>
          <History
            ui={this.state.transaction_arr}
            del={this.handleDelete}
            edit={this.handleUpdate}
          />
          <div className="inputs">
            <form>
              <label style={{ fontSize: "1.8rem" }}>Add Transactions</label>
              <DescriptionInput
                eventHandler={this.handleChangeHis}
                placeholder="Description"
                value={this.state.history}
              />
              <label style={{ fontSize: "1.8rem" }}>Enter Amount</label>
              <p style={{ margin: "0.5rem 0", fontSize: "1.2rem" }}>
                Enter Positive Value (Income) or Enter Negative Value (Expense)
              </p>
              <AmountInput
                eventHandler={this.handleChange}
                placeholder="Enter Amount"
                value={this.state.amount}
              />
            </form>

            <button
              style={{
                padding: "1rem 0",
                margin: "1rem 0",
                border: "none",
                background: "#a4def9",
                fontSize: "2rem",
              }}
              onClick={this.handleClick}
            >
              Enter Amount
            </button>
          </div>
        </div>
      </div>
    );
  }
}
