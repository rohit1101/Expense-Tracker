import React from "react";

export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editedText: this.props.item.amt,
    };
  }

  handleEdit = (e) => {
    this.setState({ editedText: e.target.value });
  };

  render() {
    const { item, del, edit } = this.props;
    return (
      <div>
        {this.state.edit ? (
          <div style={{ margin: "1rem 0" }}>
            <input
              style={{
                background: "#a4def9",
                border: "none",
                padding: "0.5rem 0.5rem",
                fontSize: "1.5rem",
              }}
              type="number"
              value={this.state.editedText}
              onChange={this.handleEdit}
            />
            <button
              style={{
                padding: "0.5rem 0.5rem",
                margin: "0 2rem",
                border: "none",
                background: "#a4def9",
                fontSize: "1.5rem",
              }}
              onClick={(e) => {
                edit(this.state.editedText, item.id);
                this.setState({ edit: false });
              }}
            >
              Update
            </button>
          </div>
        ) : (
          <div id="icons">
            <p
              style={{ fontSize: "1.6rem" }}
              className={item.amt >= 0 ? "inc" : "exp"}
            >
              ${Math.abs(item.amt)} - {item.history}
            </p>
            <div>
              <i
                className="fas fa-edit"
                onClick={(e) => {
                  this.setState({ edit: true });
                }}
              />
              <i
                className="fas fa-trash-alt"
                onClick={(e) => del(e, item.id)}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
